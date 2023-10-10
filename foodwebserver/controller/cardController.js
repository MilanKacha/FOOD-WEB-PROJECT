const Cart = require("../modal/CardModal");
const catchAsync = require("../utils/catchAsync");

exports.addToCart = catchAsync(async (req, res, next) => {
  const { id } = req.user;
  const { product, quantity } = req.body;
  // console.log(req.user);

  // Check if the product already exists in the user's cart
  const existingCartItem = await Cart.findOne({ user: id, product });

  if (existingCartItem) {
    // If it exists, update the quantity
    existingCartItem.quantity += quantity;
    await existingCartItem.save();
    res.status(201).json(existingCartItem);
  } else {
    // If it doesn't exist, create a new cart entry
    const cart = new Cart({ product, quantity, user: id });
    const doc = await cart.save();
    res.status(201).json(doc);
  }
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

exports.deleteCartByUser = catchAsync(async (req, res, next) => {
  // Get the user's ID from the authenticated user (provided by the protect middleware)
  const { id } = req.user;
  // console.log(id);

  // Delete all cart items associated with the user
  await Cart.deleteMany({ user: id });
  // Respond with a success message
  res.status(204).json({
    status: "success",
    message: "Cart deleted successfully",
  });
});
