const express = require("express");
const { rateLimit } = require("express-rate-limit");
const server = express();
const productRoute = require("./routes/productRoutes");
const restorantRoute = require("./routes/restorantRoutes");
const userRoute = require("./routes/userRoutes");

//1) middlewares
server.use(express.json()); // to parse req.body

// ratelimit middleware function
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes time in miliseconds
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP, Please try again in an 15minutes!",
});
server.use("/api", limiter); // it works on all route of /api

//3) Routes
server.use("/api/v1/", productRoute);
server.use("/api/v1/restorant", restorantRoute);
server.use("/api/v1/users", userRoute);

module.exports = server;
