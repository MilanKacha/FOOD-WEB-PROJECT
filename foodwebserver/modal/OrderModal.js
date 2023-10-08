const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    product: { type: [Schema.Types.Mixed], required: true },
    totalAmount: { type: Number },
    totalItems: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paymentMethod: {
      type: String,
      default: "cash",
      enum: {
        values: ["card", "cash"],
        message: "enum validator failed for payment Methods",
      },
    },
    paymentStatus: { type: String, default: "pending" },
    status: { type: String, default: "pending" },
    selectedAddress: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
);

const virtual = OrderSchema.virtual("id");
virtual.get(function () {
  return this._id;
});

module.exports = mongoose.model("Order", OrderSchema);
