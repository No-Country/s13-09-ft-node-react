const logging = (req, res, next) => {
  console.log(`Request made to ${req.url} with method ${req.method}.`);
  next();
};

export default logging;
