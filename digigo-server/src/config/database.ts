import mongoose from 'mongoose';
import { config } from './index';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};
