import express from 'express';
import { json, urlencoded } from 'express';
import { connectDB } from './config/database';
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes';
import recommendationRoutes from './routes/recommendation.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
