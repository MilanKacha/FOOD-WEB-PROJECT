const Product = require("../modal/ProductModal");
const catchAsync = require("../utils/catchAsync");
const cloudinary = require("../utils/cloudinaryConfig");

exports.getAllProduct = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  res.status(201).json(products);
});

exports.getOneProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(201).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const file = req.files.image;
  // console.log(file);
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "products", // Adjust the folder name as needed
    width: 150, // Set the desired image width
    crop: "scale",
  });
  // console.log(result)
  const product = await Product.create({ ...req.body, image: result.url });
  res.status(201).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.updateOneProduct = catchAsync(async (req, res, next) => {
  const update = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  //   Todo if not updateProduct
  res.status(201).json({
    status: "success",
    data: {
      update,
    },
  });
});

exports.deleteOneProduct = catchAsync(async (req, res, next) => {
  const deleteoneItem = await Product.findByIdAndDelete(req.params.id);

  //   Todo if not deleteProduct
  res.status(200).json({
    status: "success",
    data: null,
  });
});
