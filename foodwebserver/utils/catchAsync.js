const catchAsync = (fu) => {
  return (req, res, next) => {
    fu(req, res, next).catch(next);
  };
};

module.exports = catchAsync;
