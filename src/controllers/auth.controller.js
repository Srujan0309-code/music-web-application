const usermodel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password, role = "user" } = req.body;

  try {
    const existingUser = await usermodel.User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const newUser = new usermodel.User({
      username,
      email,
      password,
      role: "user",
    });

    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
    );

    await newUser.save();
    res.cookie("token", token);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  register,
};
