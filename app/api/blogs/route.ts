import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { isSanityConfigured } from '@/sanity/env';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).width(160).height(110).url();
}

export async function GET() {
  if (!isSanityConfigured) {
    return NextResponse.json({ blogs: [] });
  }
  
  try {
    const query = `*[_type == "blog"] | order(coalesce(publishedAt, _createdAt) desc)[0...5] {
      _id,
      title,
      slug,
      image,
      publishedAt,
      _createdAt,
      category->{
        title
      }
    }`;
    
    const blogs = await client.fetch(query);
    
    // Transform blogs to include image URLs
    const transformedBlogs = blogs.map((blog: any) => ({
      ...blog,
      image: blog.image ? urlFor(blog.image) : null,
    }));

    return NextResponse.json({ blogs: transformedBlogs });
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return NextResponse.json({ blogs: [] });
  }
}
