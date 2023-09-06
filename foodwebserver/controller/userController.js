const User = require("../modal/UserModal");
const catchAsync = require("../utils/catchAsync");

exports.getOneUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id); //protected route get user so req.user.id
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.getAllusers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  // Send response
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  //1)create error if user update password data & role
  if (req.body.password || req.body.passwordConfirm || req.body.role) {
    return res.status(400).json({
      message: "This route is not for password & role updates",
    });
  }

  //3)Update the user document
  const updateUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updateUser,
    },
  });
});
