const express = require("express");
const server = express();
const productRoute = require("./routes/productRoutes");
const { createProduct } = require("./controller/productController");

// middlewares
server.use(express.json()); // to parse req.body

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

// server.post("/product", createProduct);

// Routes
server.use("/api/v1/", productRoute);

module.exports = server;
