import { Request, Response } from 'express';
import { Product } from '../models/product.model';
import { Interaction } from '../models/interaction.model';


export const getRecommendations = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).json({ message: 'User ID is required' });
    return;
  }

  try {
    const interactions = await Interaction.find({ userId })
      .sort({ timestamp: -1 })
      .limit(5)
      .select('productId');

    const productIds = interactions.map(interaction => interaction.productId);

    const recommendedProducts = await Product.find({
      _id: { $in: productIds },
    });

    res.status(200).json(recommendedProducts);
  } catch (error) {
    res.status(500).json({ message: 'Error generating recommendations', error });
  }
};

export const writeInteraction = async (req: Request, res: Response): Promise<void> => {
  const { userId, productId, type } = req.body;

  if (!userId || !productId || !type) {
    res.status(400).json({ message: 'userId, productId, and type are required' });
    return;
  }

  try {
    const newInteraction = new Interaction({ userId, productId, type });
    await newInteraction.save();

    res.status(201).json({ message: 'Interaction recorded', interaction: newInteraction });
  } catch (error) {
    res.status(500).json({ message: 'Error recording interaction', error });
  }
};