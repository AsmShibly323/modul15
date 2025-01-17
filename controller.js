import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';

//  Create get request api

export const helloWorld = (req, res) => {
  res.send('Hello World');
};

//  Create  post request
export const postBody = (req, res) => {
  res.json(`I am post body`);
};

// Create a json web token
export const generateToken = (req, res) => {
  const token = jwt.sign({ id: 1 }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};