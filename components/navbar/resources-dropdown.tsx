"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export interface BlogItem {
  _id: string
  title: string
  slug: { current: string }
  image?: string
  category?: { title: string }
}

interface ResourcesDropdownProps {
  isOpen: boolean
  blogs?: BlogItem[]
}

export function ResourcesDropdown({ isOpen, blogs: initialBlogs = [] }: ResourcesDropdownProps) {
  const [hoveredImage, setHoveredImage] = React.useState<string | null>(null)
  const [activeImage, setActiveImage] = React.useState<string | null>(null)
  const [blogs, setBlogs] = useState<BlogItem[]>(initialBlogs)
  const [loading, setLoading] = useState(initialBlogs.length === 0)

  // Fetch blogs client-side if not provided
  useEffect(() => {
    if (initialBlogs.length === 0) {
      fetchBlogs()
    }
  }, [initialBlogs.length])

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs')
      if (res.ok) {
        const data = await res.json()
        setBlogs(data.blogs || [])
      }
    } catch (error) {
      console.error('Failed to fetch blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleMouseEnter = (image?: string) => {
    if (image) {
      setHoveredImage(image)
      setActiveImage(image)
    }
  }

  const handleMouseLeave = () => {
    setHoveredImage(null)
  }

  // Show max 5 blogs
  const displayBlogs = blogs.slice(0, 5)

  return (
    <div className="w-full bg-white lg:border-b lg:border-gray-200/60">
      <div className="mx-auto max-w-[980px] px-6 py-8 lg:py-10">
        <div className="flex">
          {/* Left Preview Area */}
          <div 
            className="hidden lg:block w-[200px] flex-shrink-0 pr-10 border-r border-gray-200/60"
            style={{
              opacity: isOpen && hoveredImage ? 1 : 0,
              transition: 'opacity 250ms ease',
              pointerEvents: hoveredImage ? 'auto' : 'none',
            }}
          >
            <div className="sticky top-0">
              <div 
                className="w-[160px] h-[110px] rounded-xl overflow-hidden bg-[#f5f5f7]"
                style={{
                  opacity: hoveredImage ? 1 : 0,
                  transform: hoveredImage ? 'scale(1)' : 'scale(0.95)',
                  transition: 'opacity 200ms ease, transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {activeImage && (
                  <Image
                    src={activeImage}
                    alt="Preview"
                    width={160}
                    height={110}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 lg:pl-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {/* Blogs Column */}
              <div 
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
                  transition: 'opacity 350ms ease 100ms, transform 350ms ease 100ms',
                }}
              >
                <h3 className="text-[11px] font-medium text-[#6e6e73] tracking-[0.8px] uppercase mb-3">
                  Latest Blogs
                </h3>

                <ul className="space-y-1">
                  {loading ? (
                    <li className="py-1.5 text-[13px] text-[#86868b]">Loading...</li>
                  ) : displayBlogs.length > 0 ? (
                    displayBlogs.map((blog, index) => (
                      <li 
                        key={blog._id}
                        style={{
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? 'translateY(0)' : 'translateY(-4px)',
                          transition: `opacity 280ms ease ${160 + index * 25}ms, transform 280ms ease ${160 + index * 25}ms`,
                        }}
                      >
                        <Link
                          href={`/blog/${blog.slug?.current || ""}`}
                          className="block py-1.5 text-[14px] font-medium text-[#1d1d1f] transition-all duration-150 hover:text-[#6F5CF3]"
                          onMouseEnter={() => handleMouseEnter(blog.image)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {blog.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="py-1.5 text-[13px] text-[#86868b]">
                      No blogs available
                    </li>
                  )}
                </ul>

                {/* View All Link */}
                <div 
                  className="mt-4"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 280ms ease 300ms',
                  }}
                >
                  <Link
                    href="/blog"
                    className="text-[12px] font-medium text-[#6F5CF3] hover:underline"
                  >
                    View all blogs →
                  </Link>
                </div>
              </div>

              {/* Quick Links Column */}
              <div 
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
                  transition: 'opacity 350ms ease 160ms, transform 350ms ease 160ms',
                }}
              >
                <h3 className="text-[11px] font-medium text-[#6e6e73] tracking-[0.8px] uppercase mb-3">
                  Quick Links
                </h3>

                <ul className="space-y-1">
                  {[
                    { label: "Case Studies", href: "#" },
                    { label: "Documentation", href: "#" },
                    { label: "Support", href: "#" },
                    { label: "Contact Sales", href: "/contact" },
                  ].map((link, index) => (
                    <li 
                      key={link.label}
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(-4px)',
                        transition: `opacity 280ms ease ${200 + index * 25}ms, transform 280ms ease ${200 + index * 25}ms`,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="block py-1.5 text-[12px] font-normal text-[#1d1d1f] transition-all duration-150 hover:text-[#6F5CF3]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
