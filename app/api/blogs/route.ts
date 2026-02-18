import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';

export async function GET() {
  try {
    await connectToDatabase();
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 }).limit(5);
    
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return NextResponse.json({ blogs: [] });
  }
}
