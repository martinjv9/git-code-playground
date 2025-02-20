const allowedOrigins = require("../config/allowedOrigins").default;

const credentials = (req, res, next) => {
  // allow credentials on same origin requests
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Credentials", true);
  }
  next();
};

module.exports = credentials;
