const Restorant = require("../modal/RestorantModal");
const Product = require("../modal/ProductModal");
const catchAsync = require("../utils/catchAsync");
const cloudinary = require("../utils/cloudinaryConfig");

exports.getAllRestorant = catchAsync(async (req, res, next) => {
  const subcategory = req.query.subcategory;
  // console.log(subcategory);

  if (subcategory) {
    // If the subcategory query parameter is provided, filter the data based on it
    const restaurants = await Restorant.find({ subCategory: subcategory });
    res.status(200).json(restaurants);
  } else {
    // If no subcategory query parameter is provided, return all restaurants
    const restaurants = await Restorant.find();
    res.status(200).json(restaurants);
  }
});

exports.getOneRestorant = catchAsync(async (req, res, next) => {
  const restorant = await Restorant.findById(req.params.id);
  res.status(201).json(restorant);
});

exports.getProductByRestorantId = catchAsync(async (req, res, next) => {
  const restaurantId = req.params.restaurantId;
  const products = await Product.find({ restaurantId });
  res.status(201).json(products);
});

exports.createRestorant = catchAsync(async (req, res, next) => {
  const file = req.files.image;
  // console.log(file);
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "restorant", // Adjust the folder name as needed
    width: 300, // Set the desired image width
    crop: "scale",
  });
  // console.log(result);
  const restorant = await Restorant.create({ ...req.body, image: result.url });
  res.status(201).json({
    status: "success",
    data: {
      restorant,
    },
  });
});

exports.updateOneRestorant = catchAsync(async (req, res, next) => {
  const update = await Restorant.findByIdAndUpdate(req.params.id, req.body, {
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

exports.deleteOneRestorant = catchAsync(async (req, res, next) => {
  const deleteoneItem = await Restorant.findByIdAndDelete(req.params.id);

  //   Todo if not deleteProduct
  res.status(200).json({
    status: "success",
    data: null,
  });
});
