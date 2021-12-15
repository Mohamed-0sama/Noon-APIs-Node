const User = require("../models/user.model");
var bcrypt = require("bcryptjs");

//GET USER
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL USER
exports.getAllUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET USER STATS
exports.getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
// exports.updateUser = async (req, res) => {
//   if (req.body.password) {
//     req.body.password = bcrypt.hashSync(req.body.password, 10);
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

exports.updateUser = async (req, res) => {
  if (!req.body.password) {
    return res.status(401).send("no password");
  }
  try {
    const user = await User.findById(req.params.id);
    !bcrypt.compareSync(req.body.password, user.password) &&
      res.status(401).json("Wrong Credentials!");
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: { username: req.body.username, email: req.body.email },
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updatePassword = async (req, res) => {
  if (!req.body.password) {
    return res.status(401).json("no password");
  }
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,

      {
        $set: { password: req.body.password },
      },

      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};
