import { Request, Response } from 'express';
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import { config } from '../config';

const JWT_SECRET = config.jwtSecret

export const profile = async (req: Request, res: Response): Promise<void> => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(400).json({ message: 'Invalid token' });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

        const user = await User.findOne({ _id: decoded.id });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json({ user: { id: user._id, email: user.email } });
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized access' });
    }
};