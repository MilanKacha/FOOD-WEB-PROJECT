const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  itemname: {
    type: String,
    required: [true, "'A product must have a name"],
    // validate: [validator.isAlpha, "product name must only contains charactor"],
  },
  restorantname: {
    type: String,
    required: [true, "A product must have a restorantname"],
    minlength: 1, // Minimum length of 5 characters
    maxlength: 100, // Maximum length of 50 characters
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  image: {
    type: String,
  },

  desc: {
    type: String,
    minlength: 1, // Minimum length of 5 characters
    maxlength: 300, // Maximum length of 50 characters
    trim: true,
    required: false,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, "rating must be above 1.0"],
    max: [5, "rating must be below 5.0"],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  isVegetarian: {
    type: Boolean,
    required: [true, "A product should have category"],
  },
  subcategory: {
    type: String,
    required: [true, "A product should have subcategory"],
  },
  popularItems: {
    type: Boolean,
  },
  popularSweet: {
    type: Boolean,
  },
  topDealItems: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
