import express from 'express';
import { getRecommendations, writeInteraction } from '../controllers/recommendation.controller';

const router = express.Router();

router.get('/', getRecommendations);
router.post('/interact', writeInteraction);

export default router;
