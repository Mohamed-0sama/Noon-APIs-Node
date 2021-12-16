const User = require("../models/user.model");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//REGISTER
exports.register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    imageSrc: req.body.imageSrc,
    isAdmin: req.body.isAdmin,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

//LOGIN
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    !user && res.status(401).json("Wrong Credentials!");

    !bcrypt.compareSync(req.body.password, user.password) &&
      res.status(401).json("Wrong Credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};
