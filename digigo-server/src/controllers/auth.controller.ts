import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import { config } from '../config';

const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, config.jwtSecret, { expiresIn: '1h' });
};

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).json({ message: 'Email already in use' });
    return;
  }

  const newUser = new User({ email, password });
  await newUser.save();
  const token = generateToken(newUser._id.toString());
  res.status(201).json({ token, user: { id: newUser._id, email: newUser.email } });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    res.status(400).json({ message: 'Invalid credentials' });
    return;
  }
  
  const token = generateToken(user._id.toString());
  res.status(200).json({ token, user: { id: user._id, email: user.email } });
};
