import express from 'express';
import { getRecommendations } from '../controllers/recommendation.controller';

const router = express.Router();

router.get('/', getRecommendations);  // Example: Get recommendations for a user

export default router;
