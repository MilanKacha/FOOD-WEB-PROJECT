const User = require("../modal/UserModal");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const catchAsync = require("../utils/catchAsync");

// for genrate jwt token
function generateToken(userId) {
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

// User login
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email }).select("password");

//     if (!user) {
//       return res
//         .status(401)
//         .json({ message: "Authentication failed: User not found" });
//     }

//     // console.log("Stored Hashed Password:", user.password);

//     // Compare the provided password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, user.password);

//     // console.log("Password Comparison Result:", isMatch);

//     if (!isMatch) {
//       return res
//         .status(401)
//         .json({ message: "Authentication failed: Password does not match" });
//     }

//     // If the passwords match, continue with successful login logic
//     // Generate a JWT token and set it in a cookie if needed

//     res.status(200).json({ message: "Login successful" });
//   } catch (error) {
//     console.error("Login Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// User logout (clear the JWT cookie)
exports.logout = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logged out successfully" });
};

// exports.signUp = async (req, res) => {
//   const salt = crypto.randomBytes(16);
//   crypto.pbkdf2(
//     req.body.password,
//     salt,
//     310000,
//     32,
//     "sha256",
//     async (err, hashedPassword) => {
//       if (err) {
//         return res.status(500).json({ message: "Password hashing error" });
//       }

//       const user = new User({
//         ...req.body,
//         password: hashedPassword.toString("hex"),
//         salt: salt.toString("hex"),
//       });

//       try {
//         await user.save();

//         const token = generateToken(user._id);

//         // Set a cookie with the JWT token
//         res.cookie("jwt", token, { httpOnly: true });

//         res
//           .status(201)
//           .json({ message: "User registered successfully", token });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "User registration error" });
//       }
//     }
//   );
// };
