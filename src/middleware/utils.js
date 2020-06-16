const logger = require('./winston');

function notFound(req, res, next) {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  console.error(error);
  const { message, stack } = error;
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  logger.error(
    `${status} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );
  res.status(status).json({
    message,
    status,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : stack,
  });
}

module.exports = {
  errorHandler,
  notFound,
};
