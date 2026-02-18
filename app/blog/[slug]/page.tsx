import { client } from "@/sanity/lib/client";
import { isSanityConfigured } from "@/sanity/env";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

async function getBlog(slug: string) {
  if (!isSanityConfigured) {
    return null;
  }
  
  try {
    const query = `*[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category->{
        _id,
        title,
        slug
      },
      image,
      description,
      body,
      publishedAt
    }`;
    return await client.fetch(query, { slug });
  } catch (error) {
    console.warn('Sanity CMS not configured or error fetching blog:', error);
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
            <Link href="/" className="text-purple-600 underline">
              Go back home
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
          {/* Category */}
          {blog.category && (
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: "#9220E1",
                color: "#fff",
              }}
            >
              {blog.category.title}
            </span>
          )}

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

          {/* Published Date */}
          {blog.publishedAt && (
            <p className="text-gray-500 mb-8">
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}

          {/* Featured Image */}
          {blog.image && (
            <div
              className="relative w-full mb-10 rounded-2xl overflow-hidden"
              style={{ height: "400px" }}
            >
              <Image
                src={urlFor(blog.image).width(800).height(400).url()}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Description */}
          <p
            className="font-geist mb-10"
            style={{
              fontSize: "20px",
              lineHeight: "160%",
              color: "rgba(0, 0, 0, 0.75)",
            }}
          >
            {blog.description}
          </p>

          {/* Body Content */}
          {blog.body && (
            <div 
              className="font-geist"
              style={{
                fontSize: "18px",
                lineHeight: "180%",
                color: "#000",
              }}
            >
              <PortableText 
                value={blog.body} 
                components={{
                  block: {
                    h1: ({children}) => <h1 className="font-clash text-4xl font-medium mt-8 mb-4" style={{color: "#000"}}>{children}</h1>,
                    h2: ({children}) => <h2 className="font-clash text-3xl font-medium mt-8 mb-4" style={{color: "#000"}}>{children}</h2>,
                    h3: ({children}) => <h3 className="font-clash text-2xl font-medium mt-6 mb-3" style={{color: "#000"}}>{children}</h3>,
                    h4: ({children}) => <h4 className="font-clash text-xl font-medium mt-6 mb-3" style={{color: "#000"}}>{children}</h4>,
                    normal: ({children}) => <p className="mb-4" style={{color: "#000"}}>{children}</p>,
                    blockquote: ({children}) => <blockquote className="border-l-4 border-purple-500 pl-4 my-4 italic" style={{color: "#333"}}>{children}</blockquote>,
                  },
                  list: {
                    bullet: ({children}) => <ul className="list-disc pl-6 mb-4" style={{color: "#000"}}>{children}</ul>,
                    number: ({children}) => <ol className="list-decimal pl-6 mb-4" style={{color: "#000"}}>{children}</ol>,
                  },
                  listItem: {
                    bullet: ({children}) => <li className="mb-2" style={{color: "#000"}}>{children}</li>,
                    number: ({children}) => <li className="mb-2" style={{color: "#000"}}>{children}</li>,
                  },
                  marks: {
                    strong: ({children}) => <strong className="font-bold" style={{color: "#000"}}>{children}</strong>,
                    em: ({children}) => <em className="italic">{children}</em>,
                    link: ({value, children}) => <a href={value?.href} className="text-purple-600 underline">{children}</a>,
                  },
                }}
              />
            </div>
          )}

          {/* Back Link */}
          <div className="mt-16">
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
