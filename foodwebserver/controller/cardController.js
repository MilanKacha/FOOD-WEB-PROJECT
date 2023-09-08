const Cart = require("../modal/CardModal");
const catchAsync = require("../utils/catchAsync");

exports.addToCart = catchAsync(async (req, res, next) => {
  const { id } = req.user;
  const cart = new Cart({ ...req.body, user: id });
  const doc = await cart.save();
  const result = await doc.populate("product"); // populate = fetch data of product
  res.status(201).json({
    status: "success",
    data: {
      result,
    },
  });
});

exports.updateCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // when we update cart quantity product is required
  const result = await cart.populate("product");
  res.status(200).json({
    status: "success",
    data: {
      result,
    },
  });
});

exports.deleteCart = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await Cart.findByIdAndDelete(id);
  res.status(200).json({
    status: "success",
    data: null,
  });
});

exports.fetchCartByUser = catchAsync(async (req, res, next) => {
  // id get from protect middleware
  const { id } = req.user;
  const cartItems = await Cart.find({ user: id }).populate("product");
  res.status(200).json(cartItems);
});
