import express from 'express';
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);       // Requires auth middleware for admin
router.put('/:id', updateProduct);     // Requires auth middleware for admin
router.delete('/:id', deleteProduct);  // Requires auth middleware for admin

export default router;
