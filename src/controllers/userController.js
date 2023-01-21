const userModel = require("../models/userModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const JWT_SECRET = "1234";

const userSignup = async (req, res) => {
  const { email, password, name } = req.body;
  console.log("userSignup");

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const userExist = await User.findOne({ email: req.body.email });
    console.log("userExist:", userExist);

    if (userExist) {
      return res.status(401).json({ message: `Username ${req.body.email} alredy exist` });
    }

    const newUser = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.status(200).json({ message: newUser, success: true });
  } catch (error) {
    console.log("Error at backend SignupAPI Route", error.message);
    res.status(500).json({ message: error.message });
  }
};

const userSigin = async (req, res) => {
  const { email, password } = req.body;
  console.log("userSignin");

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: true, message: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ token: token, email, status: "success" });
    } else {
      return res.json({ error: true, message: "error, please try agawin" });
    }
  }
  res.json({ error: true, message: "Invalid Password" });
};

const getUserProfile = async (id) => {
  const user = await User.findOne({ id });
  console.log("user:", user);
};

module.exports = { userSignup, userSigin,getUserProfile };
