import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  console.log('Token received:', token); // Log the token

  if (!token) {
    console.log('No token found, unauthorized');
    return next(errorHandler(401, 'Unauthorized'));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('Token verification failed:', err);
      return next(errorHandler(403, 'Forbidden'));
    }

    req.user = user;
    next();
  });
};

