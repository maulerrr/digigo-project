import { Request, Response } from 'express';
import { Product } from '../models/product.model';
import { Interaction } from '../models/interaction.model';

// Get personalized recommendations for a user
export const getRecommendations = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).json({ message: 'User ID is required' });
    return;
  }

  try {
    // Find the top 5 most frequently viewed or liked products by the user
    const interactions = await Interaction.find({ userId })
      .sort({ timestamp: -1 })
      .limit(5)
      .select('productId');

    const productIds = interactions.map(interaction => interaction.productId);

    // Retrieve products similar to the user's interacted products
    const recommendedProducts = await Product.find({
      _id: { $in: productIds },
    });

    res.status(200).json(recommendedProducts);
  } catch (error) {
    res.status(500).json({ message: 'Error generating recommendations', error });
  }
};