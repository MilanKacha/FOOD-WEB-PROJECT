const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dkaenszh3",
  api_key: "389274297631627",
  api_secret: "a58Zcn5zqxiTAeyTjD5hCViMAy4",
  secure: true,
});

module.exports = cloudinary;
