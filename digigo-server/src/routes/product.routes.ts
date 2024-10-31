import express from 'express';
import { getAllProducts, getProduct, createProduct, deleteProduct, purchaseProduct } from '../controllers/product.controller';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);       // TODO: Requires auth middleware for admin
router.delete('/:id', deleteProduct);  // TODO: Requires auth middleware for admin
router.post('/purchase', purchaseProduct);


export default router;
