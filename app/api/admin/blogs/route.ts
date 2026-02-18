import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';
import { verifyToken } from '@/lib/auth';

// GET all blogs (admin only - includes unpublished)
export async function GET(request: NextRequest) {
  try {
    // Verify admin token
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Fetch blogs error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST create new blog (admin only)
export async function POST(request: NextRequest) {
  try {
    // Verify admin token
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, subtitle, slug, featuredImage, content, metaTitle, metaDescription, published } = body;

    if (!title || !slug || !featuredImage || !content) {
      return NextResponse.json(
        { error: 'Title, slug, featured image, and content are required' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return NextResponse.json(
        { error: 'A blog with this slug already exists' },
        { status: 400 }
      );
    }

    const blog = await Blog.create({
      title,
      subtitle,
      slug,
      featuredImage,
      content,
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || subtitle || '',
      published: published !== false,
    });

    return NextResponse.json(
      { message: 'Blog created successfully', blog },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create blog error:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}
