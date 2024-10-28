import mongoose, { Document, Schema } from 'mongoose';

export interface IInteraction extends Document {
  userId: string;
  productId: string;
  type: 'view' | 'like';
  timestamp: Date;
}

const interactionSchema = new Schema<IInteraction>({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  type: { type: String, enum: ['view', 'like'], required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Interaction = mongoose.model<IInteraction>('Interaction', interactionSchema);