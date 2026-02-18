import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  subtitle?: string;
  slug: string;
  featuredImage: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  subtitle: { type: String },
  slug: { type: String, required: true, unique: true },
  featuredImage: { type: String, required: true },
  content: { type: String, required: true },
  metaTitle: { type: String },
  metaDescription: { type: String },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Update the updatedAt timestamp before saving
BlogSchema.pre('save', function() {
  this.updatedAt = new Date();
});

export const Blog = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
