"use client"

import React from "react"
import { SearchIcon, ChevronDown, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CommandItem, SearchModal } from "@/components/ui/search-modal"
import { ServicesDropdown } from "./services-dropdown"
import { ResourcesDropdown, BlogItem } from "./resources-dropdown"
import Image from "next/image"

interface NavbarProps {
    blogs?: BlogItem[]
}

import { ProfileDownloadPopup } from "../contact/profile-download-popup"

export function Navbar({ blogs = [] }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [isProfileOpen, setIsProfileOpen] = React.useState(false)

    const [activeDropdown, setActiveDropdown] = React.useState<"services" | "resources" | null>(null)
    const [dropdownVisible, setDropdownVisible] = React.useState(false)
    const [hasAnimated, setHasAnimated] = React.useState(false)

    const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false)
    const [mobileResourcesOpen, setMobileResourcesOpen] = React.useState(false)

    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    const links = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "#" },
        { label: "Our Services", href: "#", key: "services" },
        { label: "Resources", href: "#", key: "resources" },
    ]

    const openDropdown = (key: "services" | "resources") => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)

        if (!dropdownVisible) {
            setActiveDropdown(key)
            setDropdownVisible(true)
            setHasAnimated(true)
        } else {
            setActiveDropdown(key)
        }
    }

    const closeDropdown = () => {
        timeoutRef.current = setTimeout(() => {
            setDropdownVisible(false)
            setActiveDropdown(null)
            setHasAnimated(false)
        }, 150)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev)
        setMobileServicesOpen(false)
        setMobileResourcesOpen(false)
    }

    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileMenuOpen])

    return (
        <>
            <header
                className="sticky top-0 z-50 w-full bg-white"
                onMouseLeave={closeDropdown}
            >
                <nav
                    className={cn(
                        "mx-auto flex h-12 sm:h-14 md:h-[60px] lg:h-[50px] w-full max-w-[1298px] items-center justify-between lg:justify-center lg:gap-8 px-5 sm:px-6 lg:px-8 xl:px-10",
                        !mobileMenuOpen && "border-b border-gray-200/60"
                    )}
                >
                    <div className="flex cursor-pointer items-center lg:w-9 lg:justify-center z-50">
                        <Image src="/logo.svg" alt="Logo" width={20} height={20} className="size-5 sm:size-6" />
                    </div>

                    <div className="hidden items-center justify-center gap-4 lg:gap-5 lg:flex">
                        {links.map(link => (
                            <div
                                key={link.label}
                                onMouseEnter={() =>
                                    link.key === "services"
                                        ? openDropdown("services")
                                        : link.key === "resources"
                                            ? openDropdown("resources")
                                            : closeDropdown()
                                }
                            >
                                <a
                                    href={link.href}
                                    className={cn(
                                        "text-[14px] font-medium transition-colors duration-300 flex items-center gap-1 cursor-pointer",
                                        activeDropdown === link.key
                                            ? "text-[#6F5CF3]"
                                            : "text-black hover:text-[#6F5CF3]"
                                    )}
                                >
                                    {link.label}
                                    {link.key && (
                                        <ChevronDown
                                            className={cn(
                                                "h-3.5 w-3.5 transition-transform duration-300",
                                                activeDropdown === link.key && "rotate-180 text-[#6F5CF3]"
                                            )}
                                        />
                                    )}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 z-50">
                        <a
                            href="/contact"
                            className="hidden lg:flex items-center justify-center px-5 py-2 bg-black text-white text-[14px] font-medium rounded-full"
                        >
                            Contact Us
                        </a>

                        <SearchModal data={searchItems}>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="size-9 hover:bg-transparent"
                            >
                                <SearchIcon className="size-[18px] text-black" />
                            </Button>
                        </SearchModal>

                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden relative w-9 h-9 flex items-center justify-center"
                        >
                            {mobileMenuOpen ? (
                                <X className="size-5 text-black" strokeWidth={1.5} />
                            ) : (
                                <div className="relative w-[18px] h-[14px] flex flex-col justify-between">
                                    <span className="w-full h-[2px] bg-black rounded-full" />
                                    <span className="w-full h-[2px] bg-black rounded-full" />
                                    <span className="w-full h-[2px] bg-black rounded-full" />
                                </div>
                            )}
                        </button>
                    </div>
                </nav>

                <div
                    className="absolute left-0 right-0 top-full z-50 hidden lg:block overflow-hidden"
                    style={{ height: dropdownVisible ? "auto" : 0 }}
                    onMouseEnter={() => {
                        if (timeoutRef.current) clearTimeout(timeoutRef.current)
                    }}
                    onMouseLeave={closeDropdown}
                >
                    <div
                        style={{
                            transform: hasAnimated ? "translateY(0)" : "translateY(-100%)",
                            opacity: dropdownVisible ? 1 : 0,
                            transition: hasAnimated
                                ? "transform 700ms cubic-bezier(0.33,1,0.68,1), opacity 500ms"
                                : "none",
                        }}
                    >
                        {activeDropdown === "services" && <ServicesDropdown isOpen />}
                        {activeDropdown === "resources" && (
                            <ResourcesDropdown
                                isOpen
                                blogs={blogs}
                                onProfileDownloadClick={() => setIsProfileOpen(true)}
                            />
                        )}
                    </div>
                </div>
            </header>

            <ProfileDownloadPopup
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
            />

            <div
                className="fixed inset-0 z-40 hidden lg:block"
                style={{
                    top: "65px",
                    background: dropdownVisible ? "rgba(10,14,49,0.12)" : "transparent",
                    backdropFilter: dropdownVisible ? "blur(12px)" : "none",
                    opacity: dropdownVisible ? 1 : 0,
                    pointerEvents: dropdownVisible ? "auto" : "none",
                    transition: "opacity 500ms ease",
                }}
                onClick={closeDropdown}
            />

            {/* MOBILE — NO ANIMATION, SAME AS BEFORE */}
            {mobileMenuOpen && (
                <div className="fixed inset-x-0 top-12 sm:top-14 bottom-0 z-40 lg:hidden bg-white">
                    <div className="h-full overflow-y-auto">
                        <div className="border-t border-gray-200/80" />

                        <div className="pt-1">
                            {links.map(link => (
                                <div key={link.label}>
                                    {link.key === "services" ? (
                                        <>
                                            <button
                                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                className="w-full flex items-center justify-between px-5 py-[14px] text-[17px] font-normal text-[#1d1d1f]"
                                            >
                                                <span>{link.label}</span>
                                                <ChevronRight className={cn(mobileServicesOpen && "rotate-90")} />
                                            </button>

                                            {mobileServicesOpen && (
                                                <div className="bg-[#f5f5f7]">
                                                    <ServicesDropdown isOpen />
                                                </div>
                                            )}

                                            <div className="mx-5 border-b border-gray-200/80" />
                                        </>
                                    ) : link.key === "resources" ? (
                                        <>
                                            <button
                                                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                                                className="w-full flex items-center justify-between px-5 py-[14px] text-[17px] font-normal text-[#1d1d1f]"
                                            >
                                                <span>{link.label}</span>
                                                <ChevronRight className={cn(mobileResourcesOpen && "rotate-90")} />
                                            </button>

                                            {mobileResourcesOpen && (
                                                <div className="bg-[#f5f5f7]">
                                                    <ResourcesDropdown
                                                        isOpen
                                                        blogs={blogs}
                                                        onProfileDownloadClick={() => {
                                                            setIsProfileOpen(true)
                                                            setMobileMenuOpen(false)
                                                        }}
                                                    />
                                                </div>
                                            )}

                                            <div className="mx-5 border-b border-gray-200/80" />
                                        </>
                                    ) : (
                                        <>
                                            <a
                                                href={link.href}
                                                className="block px-5 py-[14px] text-[17px] font-normal text-[#1d1d1f]"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {link.label}
                                            </a>
                                            <div className="mx-5 border-b border-gray-200/80" />
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="h-32" />
                    </div>
                </div>
            )}
        </>
    )
}

const searchItems: CommandItem[] = [
    {
        id: "blog-1",
        title: "The Future of Web Dev",
        description: "A quick look at upcoming web technologies.",
        category: "Web Dev",
    },
    {
        id: "blog-2",
        title: "Minimalist Design Tips",
        description: "Learn how less can often be more in UI design.",
        category: "Design",
    },
]
