const express = require("express");
const server = express();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
// const bcrypt = require("bcrypt");
const productRoute = require("./routes/productRoutes");
const restorantRoute = require("./routes/restorantRoutes");
const userRoute = require("./routes/userRoutes");
const User = require("./modal/UserModal");

// middlewares
server.use(express.json()); // to parse req.body
// docs of express-session npm
server.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 },
  })
);
server.use(passport.initialize());
server.use(passport.session());
// Routes
server.use("/api/v1/", productRoute);
server.use("/api/v1/restorant", restorantRoute);
server.use("/api/v1/users", userRoute);

// passport.js
// passport.use(
//   new LocalStrategy(async function (email, password, done) {
//     try {
//       const user = await User.findOne({ email: email });
//       console.log(email, password, user);
//       if (!user) {
//         return done(null, false, { message: "invalid credentials" }); // for safety
//       }
//       crypto.pbkdf2(
//         password,
//         user.salt,
//         310000,
//         32,
//         "sha256",
//         async function (err, hashedPassword) {
//           if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
//             return done(null, false, { message: "invalid credentials" });
//           }
//           const token = jwt.sign(sanitizeUser(user), "SECRET_KEY");

//           done(null, { token }); // this lines sends to serializer
//         }
//       );
//     } catch (err) {
//       done(err);
//     }
//   })
// );

// passport js /session/ authentication

// passport.serializeUser(function (user, cb) {
//   console.log("serialize", user);
//   process.nextTick(function () {
//     return cb(null, { id: user.id, role: user.role });
//   });
// });

// this changes session variable req.user when called from authorized request

// passport.deserializeUser(function (user, cb) {
//   console.log("de-serialize", user);
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

module.exports = server;
