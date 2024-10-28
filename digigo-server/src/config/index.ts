import dotenv from 'dotenv';
import path from 'path';

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';
dotenv.config({ path: path.resolve(__dirname, `../../${envFile}`) });

export const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/digigo',
  jwtSecret: process.env.JWT_SECRET || 'ne-snezhka',
};
