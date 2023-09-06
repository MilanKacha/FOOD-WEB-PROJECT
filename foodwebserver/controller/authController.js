const User = require("../modal/UserModal");
const { promisify } = require("util"); // use for built in promisify in protect route
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const catchAsync = require("../utils/catchAsync");

// for genrate jwt token
function generateToken(userId) {
  // Todo process.env
  return jwt.sign({ userId }, "your-secret-key", { expiresIn: "1h" });
}

// send jwt
// const createSendToken = (user, statusCode, res) => {
//   const token = signToken(user._id);
//   const cookieOptions = {
//     expires: new Date(
//       Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };
//   if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

//   res.cookie("jwt", token, cookieOptions);
//   // remove the password from the output
//   user.password = undefined;

//   res.status(statusCode).json({
//     status: "success",
//     token,
//     data: {
//       user: user,
//     },
//   });
// };

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const token = generateToken(newUser._id);

  // Set a cookie with the JWT token
  res.cookie("jwt", token, { httpOnly: true });

  res.status(201).json({
    status: "success",
    token,
    data: {
      newUser,
    },
  });
});

// User login
exports.logIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please provide email & password" });
  }

  const user = await User.findOne({ email }).select("password");
  // console.log(user);

  const correct = await user.correctPassword(password, user.password);

  if (!user || !correct) {
    return res.status(400).json({ message: "Incorrect email or password" });
  }

  const token = generateToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
});

// protected route
exports.protect = catchAsync(async (req, res, next) => {
  console.log(req.file);
  //1)Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res
      .status(401)
      .json({ message: "You are not Logged In! Please login to get access" });
  }
  // console.log(token);
  // 2)validate the token
  const decode = await promisify(jwt.verify)(token, "your-secret-key");
  // console.log(decode); // return jwt payload
  // 3)check if user still exist
  const freshUser = await User.findById(decode.userId);
  if (!freshUser) {
    return res
      .status(401)
      .json({ message: "The user belonging to this does no longer exist" });
  }

  req.user = freshUser; // protected route get access(use in updateMe) || Grant access to protected route
  next(); // for protected after route
});

// User logout (clear the JWT cookie)
exports.logout = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logged out successfully" });
};
