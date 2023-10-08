const Order = require("../modal/OrderModal");
const catchAsync = require("../utils/catchAsync");

exports.creteOrder = catchAsync(async (req, res, next) => {
  const order = Order(req.body);
  await order.save();
  res.status(201).json({
    data: {
      order,
    },
  });
});

exports.deleteOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  // console.log(id);
  const order = await Order.findByIdAndDelete(id);

  res.status(201).json({
    status: "success",
    data: null,
  });
});

exports.updateOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "success",
    data: {
      order,
    },
  });
});

exports.fetchOrderByUser = catchAsync(async (req, res, next) => {
  const { id } = req.user;
  const order = await Order.find({ user: id });
  res.status(200).json(order);
});
