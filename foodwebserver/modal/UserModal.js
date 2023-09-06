const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    // required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Enter valid email"],
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    enum: ["restorantowner", "admin", "user"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a pasword"],
    minLength: 8,
    select: false, //not get in getuser
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    // This is only work create & save
    validate: {
      validator: function (el) {
        return el === this.password; // return true or false
      },
    },
    message: "Password are not same",
  },
  phone: {
    type: Number,
    max: 10,
  },
  street: {
    type: String,
    minLength: 5,
    maxLength: [100, "street have max 100 characters"],
  },
  city: {
    type: String,
    minLength: 5,
    maxLength: [50, "city have max 100 characters"],
  },
  pincode: {
    type: Number,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  passwordChangeAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

// pre middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // if password not modified terurn next

  this.password = await bcrypt.hash(this.password, 12); // (password, salt) & hash the password

  this.passwordConfirm = undefined; // conformPassword not save in database
  next();
});

// function for correct password
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userpassword
) {
  return await bcrypt.compare(candidatePassword, userpassword);
};

module.exports = mongoose.model("User", userSchema);
