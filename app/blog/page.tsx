import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

async function getBlogs() {
  const query = `*[_type == "blog"] | order(publishedAt asc) {
    _id,
    title,
    slug,
    category->{
      _id,
      title,
      slug
    },
    image,
    description
  }`;
  return client.fetch(query);
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
                <div
                  key={blog._id}
                  className="flex flex-col"
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
                    {blog.image ? (
                      <Image
                        src={urlFor(blog.image).width(414).height(288).url()}
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
                    {/* Category */}
                    {blog.category && (
                      <span
                        className="inline-block w-fit px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: "rgba(146, 32, 225, 0.1)",
                          color: "#9220E1",
                        }}
                      >
                        {blog.category.title}
                      </span>
                    )}

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

                    {/* Description */}
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
                      {blog.description}
                    </p>

                    {/* Learn More */}
                    <Link
                      href={`/blog/${blog.slug?.current || ""}`}
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
                    </Link>
                  </div>
                </div>
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
