const User = require("../modal/UserModal");
const catchAsync = require("../utils/catchAsync");

exports.getme = (req, res, next) => {
  req.params.id = req.user.id;
  console.log(req.params.id);
  console.log(req.user.id);
  next();
};

exports.getOneUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});
