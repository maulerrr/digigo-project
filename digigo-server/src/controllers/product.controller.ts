import { Request, Response } from 'express';
import { Product } from '../models/product.model';
import { Interaction } from '../models/interaction.model';


export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  const { category, priceMin, priceMax } = req.query;

  try {
    const query: any = {};

    if (category) {
      query.category = category;
    }

    if (priceMin || priceMax) {
      query.price = {};
      if (priceMin) query.price.$gte = parseFloat(priceMin as string);
      if (priceMax) query.price.$lte = parseFloat(priceMax as string);
    }

    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, category, price, image_url } = req.body;
    const newProduct = new Product({ name, description, category, price, image_url });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};

export const purchaseProduct = async (req: Request, res: Response): Promise<void> => {
  const { userId, productId } = req.body;

  if (!userId || !productId) {
    res.status(400).json({ message: 'userId and productId are required' });
    return;
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    const newPurchase = new Interaction({ userId, productId, type: 'purchase' });
    await newPurchase.save();

    res.status(201).json({ message: 'Product purchased', purchase: newPurchase });
  } catch (error) {
    res.status(500).json({ message: 'Error processing purchase', error });
  }
};