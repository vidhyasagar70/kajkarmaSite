import { connectToDatabase } from "@/lib/mongodb";
import { Blog } from "@/lib/models/Blog";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";

async function getBlogs() {
  try {
    await connectToDatabase();
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 }).lean();
    return blogs.map(blog => ({
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.warn('Error fetching blogs:', error);
    return [];
  }
}

export default async function BlogListPage() {
  const blogs = await getBlogs();

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <section className="flex-1 py-20">
        <div className="mx-auto px-8" style={{ maxWidth: "1400px" }}>
          {/* Header */}
          <h1
            className="font-clash text-center mb-16"
            style={{
              fontWeight: 500,
              fontSize: "54px",
              lineHeight: "120%",
              color: "#000",
            }}
          >
            All Blogs
          </h1>

          {/* Blog Grid */}
          {blogs.length > 0 ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: "30px" }}
            >
              {blogs.map((blog: any) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className="flex flex-col hover:opacity-80 transition-opacity"
                  style={{ gap: "24px" }}
                >
                  {/* Image */}
                  <div
                    className="relative w-full overflow-hidden bg-gray-100"
                    style={{
                      height: "288px",
                      borderRadius: "18px",
                    }}
                  >
                    {blog.featuredImage ? (
                      <Image
                        src={blog.featuredImage}
                        alt={blog.title}
                        fill
                        className="object-cover rounded-[18px]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center rounded-[18px]">
                        <span className="text-gray-400 text-sm">Blog Image</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col" style={{ gap: "12px" }}>
                    {/* Title */}
                    <h3
                      className="font-clash"
                      style={{
                        fontWeight: 500,
                        fontSize: "30px",
                        lineHeight: "112%",
                        letterSpacing: "0.02em",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                    >
                      {blog.title}
                    </h3>

                    {/* Subtitle */}
                    {blog.subtitle && (
                      <p
                        className="font-geist"
                        style={{
                          fontWeight: 400,
                          fontSize: "20px",
                          lineHeight: "120%",
                          letterSpacing: "0.02em",
                          color: "rgba(0, 0, 0, 0.75)",
                        }}
                      >
                        {blog.subtitle}
                      </p>
                    )}

                    {/* Learn More */}
                    <span
                      className="inline-flex items-center gap-1"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "100%",
                        color: "rgba(146, 32, 225, 1)",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      }}
                    >
                      Learn More
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No blogs found.</p>
              <Link href="/" className="text-purple-600 underline mt-4 inline-block">
                Go back home
              </Link>
            </div>
          )}

          {/* Back Link */}
          <div className="text-center mt-16">
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
      </section>
      <FooterSection />
    </main>
  );
}
