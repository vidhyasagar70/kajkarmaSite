"use client"

import React from "react"
import Image from "next/image"

interface QuickLink {
  label: string
  href: string
  image?: string
}

interface ServiceColumn {
  title: string
  links: QuickLink[]
  isBold?: boolean
}

const serviceColumns: ServiceColumn[] = [
  {
    title: "Explore Services",
    isBold: true,
    links: [
      { label: "Strategic Solutions", href: "/strategic-solutions", image: "/page7.png" },
      { label: "AI Automation", href: "/ai-automation", image: "/page9.png" },
      { label: "White Label", href: "/white-label", image: "/page10.png" },
      { label: "Digital Products", href: "/digital-products", image: "/page11.png" },
      { label: "MVP Development", href: "/mvp-development", image: "/page14.png" },
    ],
  },
  {
    title: "Growth & Marketing",
    isBold: true,
    links: [
      { label: "Sales & Outreach", href: "/sales-outreach", image: "/page12.png" },
      { label: "Marketing Solutions", href: "/marketing-solutions", image: "/page13.png" },
    ],
  },
  {
    title: "Quick Links",
    isBold: false,
    links: [
      { label: "Case Studies", href: "#" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
      { label: "Contact Sales", href: "#" },
    ],
  },
]

interface ServicesDropdownProps {
  isOpen: boolean
}

export function ServicesDropdown({ isOpen }: ServicesDropdownProps) {
  const defaultImage = "/page7.png"
  const [hoveredImage, setHoveredImage] = React.useState<string | null>(null)
  const [activeImage, setActiveImage] = React.useState<string>(defaultImage)

  const handleMouseEnter = (image?: string) => {
    if (image) {
      setHoveredImage(image)
      setActiveImage(image)
    }
  }

  const handleMouseLeave = () => {
    setHoveredImage(null)
  }

  return (
    <div className="w-full bg-white lg:border-b lg:border-gray-200/60">
      <div className="mx-auto max-w-[980px] px-6 py-8 lg:py-10">
        <div className="flex">
          {/* Left Preview Area */}
          <div 
            className="hidden lg:block w-[200px] flex-shrink-0 pr-10 border-r border-gray-200/60"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: 'opacity 400ms ease 100ms',
            }}
          >
            <div className="sticky top-0">
              <div 
                className="w-[160px] h-[110px] rounded-xl overflow-hidden bg-[#f5f5f7]"
                style={{
                  opacity: hoveredImage ? 1 : 0.4,
                  transform: hoveredImage ? 'scale(1)' : 'scale(0.98)',
                  transition: 'opacity 400ms ease, transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {activeImage && (
                  <Image
                    src={activeImage}
                    alt="Preview"
                    width={160}
                    height={110}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right Links Area */}
          <div className="flex-1 lg:pl-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {serviceColumns.map((column, colIndex) => (
                <div 
                  key={column.title}
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
                    transition: `opacity 350ms ease ${100 + colIndex * 60}ms, transform 350ms ease ${100 + colIndex * 60}ms`,
                  }}
                >
                  <h3 className="text-[11px] font-medium text-[#6e6e73] tracking-[0.8px] uppercase mb-3">
                    {column.title}
                  </h3>

                  <ul className="space-y-1">
                    {column.links.map((link, linkIndex) => (
                      <li 
                        key={link.label}
                        style={{
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? 'translateY(0)' : 'translateY(-4px)',
                          transition: `opacity 280ms ease ${140 + colIndex * 60 + linkIndex * 25}ms, transform 280ms ease ${140 + colIndex * 60 + linkIndex * 25}ms`,
                        }}
                      >
                        <a
                          href={link.href}
                          className={`block py-1 text-[#1d1d1f] transition-all duration-150 hover:text-[#6F5CF3] ${
                            column.isBold 
                              ? 'text-[15px] font-medium' 
                              : 'text-[12px] font-normal'
                          }`}
                          onMouseEnter={() => handleMouseEnter(link.image)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
