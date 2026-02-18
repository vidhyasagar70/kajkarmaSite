import { connectToDatabase } from "@/lib/mongodb";
import { Blog } from "@/lib/models/Blog";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";

async function getBlog(slug: string) {
  try {
    await connectToDatabase();
    const blog = await Blog.findOne({ slug, published: true }).lean();
    if (!blog) return null;
    
    return {
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
    };
  } catch (error) {
    console.warn('Error fetching blog:', error);
    return null;
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <main className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog not found</h1>
            <Link href="/blog" className="text-purple-600 underline">
              Go back to blogs
            </Link>
          </div>
        </div>
        <FooterSection />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <article className="flex-1 py-20">
        <div className="mx-auto px-4" style={{ maxWidth: "800px" }}>
          {/* Title */}
          <h1
            className="font-clash mb-6"
            style={{
              fontWeight: 500,
              fontSize: "48px",
              lineHeight: "120%",
              color: "#000",
            }}
          >
            {blog.title}
          </h1>

          {/* Subtitle */}
          {blog.subtitle && (
            <p
              className="font-geist mb-6"
              style={{
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "130%",
                color: "rgba(0, 0, 0, 0.7)",
              }}
            >
              {blog.subtitle}
            </p>
          )}

          {/* Published Date */}
          <p
            className="font-geist mb-8"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
            <p className="text-gray-500 mb-8">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

          {/* Featured Image */}
          {blog.featuredImage && (
            <div
              className="relative w-full mb-10 rounded-2xl overflow-hidden"
              style={{ height: "400px" }}
            >
              <Image
                src={blog.featuredImage}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Blog Content */}
          <div 
            className="font-geist prose prose-lg max-w-none"
            style={{
              fontSize: "18px",
              lineHeight: "180%",
              color: "#000",
            }}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
              className="whitespace-pre-wrap"
            />
          </div>

          {/* Back Link */}
          <div className="mt-16 flex gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2"
              style={{
                color: "#9220E1",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              ← Back to Blogs
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              style={{
                color: "#9220E1",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </article>
      <FooterSection />
    </main>
  );
}
