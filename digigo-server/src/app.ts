import express from 'express';
import { json, urlencoded } from 'express';
import { connectDB } from './config/database';
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes';
import recommendationRoutes from './routes/recommendation.routes';
import { errorHandler } from './middleware/error.middleware';
import swaggerDocument from './config/swagger.json';
import swaggerUi from 'swagger-ui-express';

const app = express();

connectDB();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/recommendations', recommendationRoutes);


app.use(errorHandler);

export default app;
