import express from 'express';
import { profile } from '../controllers/user.controller';
import { asyncHandler } from '../middleware/asyncHandler';

const router = express.Router();

router.get('/profile', asyncHandler(profile));

export default router;