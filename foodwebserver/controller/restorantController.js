const Restorant = require("../modal/RestorantModal");
const catchAsync = require("../utils/catchAsync");

exports.getAllRestorant = catchAsync(async (req, res, next) => {
  const restorants = await Restorant.find();
  res.status(201).json({
    status: "success",
    result: restorants.length,
    data: {
      restorants,
    },
  });
});

exports.getOneRestorant = catchAsync(async (req, res, next) => {
  const restorant = await Restorant.findById(req.params.id);
  res.status(201).json({
    status: "success",
    data: {
      restorant,
    },
  });
});

exports.createRestorant = catchAsync(async (req, res, next) => {
  const restorant = await Restorant.create(req.body);
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
