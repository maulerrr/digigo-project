import express from 'express';
import { register, login } from '../controllers/auth.controller';
import { asyncHandler } from '../middleware/asyncHandler';

const router = express.Router();

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));

export default router;
