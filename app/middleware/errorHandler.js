const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
  next(); // Call next() if needed
};


export default errorHandler;
