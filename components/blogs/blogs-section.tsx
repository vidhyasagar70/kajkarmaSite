"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  category: Category;
  image: any;
  description: string;
}

// Fallback categories when none exist in Sanity
const fallbackCategories = [
  { _id: "c1", title: "Marketing", slug: { current: "marketing" } },
  { _id: "c2", title: "Sales", slug: { current: "sales" } },
  { _id: "c3", title: "Growth", slug: { current: "growth" } },
  { _id: "c4", title: "Product", slug: { current: "product" } },
  { _id: "c5", title: "Technology", slug: { current: "technology" } },
];

// Fallback data when no blogs exist in Sanity
const fallbackBlogs: Blog[] = [
  {
    _id: "1",
    category: { _id: "c1", title: "Sales", slug: { current: "sales" } },
    image: null,
    title: "Sales Outreach That Gets Replies",
    slug: { current: "sales-outreach" },
    description:
      "Learn how personalization, targeting, and follow-ups improve responses in modern sales outreach.",
  },
  {
    _id: "2",
    category: { _id: "c2", title: "Product", slug: { current: "product" } },
    image: null,
    title: "MVP vs Full Product: What Should You Build First?",
    slug: { current: "mvp-vs-full-product" },
    description:
      "Decide whether to build an MVP or full product to validate ideas faster.",
  },
  {
    _id: "3",
    category: { _id: "c3", title: "Marketing", slug: { current: "marketing" } },
    image: null,
    title: "Why Marketing Campaigns Fail",
    slug: { current: "marketing-campaigns-fail" },
    description:
      "Common campaign mistakes businesses make and how data-driven strategies fix poor performance.",
  },
  {
    _id: "4",
    category: { _id: "c4", title: "Technology", slug: { current: "technology" } },
    image: null,
    title: "When White-Label Services Make Sense",
    slug: { current: "white-label-services" },
    description:
      "Understand when white-label solutions help agencies and businesses scale services efficiently.",
  },
  {
    _id: "5",
    category: { _id: "c4", title: "Technology", slug: { current: "technology" } },
    image: null,
    title: "Choosing the Right Tech Stack",
    slug: { current: "right-tech-stack" },
    description:
      "Select technologies that support performance, scalability, and long-term product growth effectively.",
  },
  {
    _id: "6",
    category: { _id: "c5", title: "Growth", slug: { current: "growth" } },
    image: null,
    title: "Building a Scalable Growth System",
    slug: { current: "scalable-growth-system" },
    description:
      "How early-stage businesses move beyond random marketing to build scalable growth systems.",
  },
];

export function BlogsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch categories
        const categoriesQuery = `*[_type == "category"] | order(_createdAt asc) {
          _id,
          title,
          slug
        }`;
        const categoriesData = await client.fetch(categoriesQuery);
        setCategories(categoriesData.length > 0 ? categoriesData : fallbackCategories);

        // Fetch blogs with category reference
        const blogsQuery = `*[_type == "blog"] | order(publishedAt asc) {
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
        const blogsData = await client.fetch(blogsQuery);
        setBlogs(blogsData.length > 0 ? blogsData : fallbackBlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCategories(fallbackCategories);
        setBlogs(fallbackBlogs);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredBlogs =
    activeCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category?.slug?.current === activeCategory);

  // Build category tabs from fetched categories
  const categoryTabs = [
    { id: "all", label: "View All" },
    ...categories.map((cat) => ({
      id: cat.slug?.current || cat._id,
      label: cat.title,
    })),
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-[50px]">
        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-start mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-2 sm:gap-3"
        >
          {categoryTabs.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="font-geist transition-colors py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 md:px-[22px] rounded-full text-xs sm:text-sm md:text-base"
              style={{
                fontWeight: activeCategory === category.id ? 700 : 500,
                lineHeight: "100%",
                letterSpacing: "0%",
                backgroundColor:
                  activeCategory === category.id ? "#9220E1" : "transparent",
                color: activeCategory === category.id ? "#fff" : "rgba(10, 14, 49, 0.8)",
                border:
                  activeCategory === category.id
                    ? "none"
                    : "0.8px solid rgba(10, 14, 49, 0.4)",
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <>
            {/* Blog Cards Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[30px] mb-8 sm:mb-10 md:mb-12 lg:mb-[50px]"
            >
              {filteredBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="flex flex-col gap-4 sm:gap-5 md:gap-6"
                >
                  {/* Image */}
                  <div
                    className="relative w-full overflow-hidden bg-gray-100 h-[180px] sm:h-[220px] md:h-[260px] lg:h-[288px] rounded-xl sm:rounded-2xl md:rounded-[18px]"
                  >
                    {blog.image ? (
                      <Image
                        src={urlFor(blog.image).width(414).height(288).url()}
                        alt={blog.title}
                        fill
                        className="object-cover rounded-xl sm:rounded-2xl md:rounded-[18px]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center rounded-xl sm:rounded-2xl md:rounded-[18px]">
                        <span className="text-gray-400 text-sm">Blog Image</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 sm:gap-3">
                    {/* Title */}
                    <h3
                      className="font-clash font-medium text-lg sm:text-xl md:text-2xl lg:text-[30px] leading-[1.12] tracking-[0.02em] text-black"
                    >
                      {blog.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-geist font-normal text-sm sm:text-base md:text-lg lg:text-[20px] leading-[1.2] tracking-[0.02em] text-black/75"
                    >
                      {blog.description}
                    </p>

                    {/* Learn More */}
                    <a
                      href={`/blog/${blog.slug?.current || ''}`}
                      className="inline-flex items-center gap-1 font-medium text-sm sm:text-base text-[#9220E1] underline underline-offset-4"
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
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* View More */}
            <div className="text-center">
              <a
                href="/blog"
                className="inline-flex items-center justify-center font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] text-[#191151]"
              >
                View More →
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
