const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "Booking must belong to a product"],
  },
  quantity: { type: Number, required: true, default: 1 },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  price: {
    type: Number,
  },
});

const virtual = CartSchema.virtual("id");
virtual.get(function () {
  return this._id;
});

module.exports = mongoose.model("Cart", CartSchema);
