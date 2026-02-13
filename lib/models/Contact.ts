import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  description: string;
  createdAt: Date;
  isRead: boolean;
}

const ContactSchema = new Schema<IContact>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
});

export const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
