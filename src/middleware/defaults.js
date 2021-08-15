import { fileURLToPath } from 'url';
import path, { join } from 'path';
import logger from './winston';

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (error, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(error);
  const { message, stack } = error;
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  logger.error(`${status} - ${req.originalUrl} - ${message} - ${stack} `);
  res.status(status).json({
    message,
    status,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : stack,
  });
};

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
