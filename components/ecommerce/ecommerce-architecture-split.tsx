"use client";

import { Layers, UserCircle, Users, ArrowRight } from "lucide-react";

export function EcommerceArchitectureSplit() {
    return (
        <section className="w-full bg-[#130624] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED] blur-[140px] opacity-10 rounded-full" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="mb-12 sm:mb-16 md:mb-20 max-w-[900px]">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-white mb-6">
                        Multi-Tenant & <span className="text-[#9220E1]">Single-Tenant Architecture</span>
                    </h2>
                    <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-white/70">
                        We provide flexible architecture options depending on your business model. Our systems are designed for scalability, allowing you to expand without rebuilding your technology stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Single Tenant */}
                    <div className="group bg-white/5 backdrop-blur-md p-8 sm:p-12 rounded-[40px] border border-white/10 hover:border-[#7C3AED]/50 transition-all flex flex-col gap-6">
                        <div className="size-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#7C3AED]">
                            <UserCircle size={32} />
                        </div>
                        <h3 className="font-clash font-medium text-2xl sm:text-3xl text-white">
                            Single-Tenant Ecommerce System
                        </h3>
                        <p className="font-geist font-light text-[16px] sm:text-[18px] leading-relaxed text-white/70">
                            Ideal for individual brands that operate a single store. This structure ensures dedicated resources, higher customization flexibility, and optimized performance for one business entity.
                        </p>
                        <div className="mt-auto pt-6 border-t border-white/10">
                            <button className="flex items-center gap-2 text-[#7C3AED] font-medium group/btn">
                                Discuss Your Requirements <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Multi Tenant */}
                    <div className="group bg-white/5 backdrop-blur-md p-8 sm:p-12 rounded-[40px] border border-white/10 hover:border-[#9220E1]/50 transition-all flex flex-col gap-6">
                        <div className="size-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#9220E1]">
                            <Users size={32} />
                        </div>
                        <h3 className="font-clash font-medium text-2xl sm:text-3xl text-white">
                            Multi-Tenant Ecommerce Platform
                        </h3>
                        <div className="flex flex-col gap-4">
                            <p className="font-geist font-light text-[16px] sm:text-[18px] leading-relaxed text-white/70">
                                Perfect for businesses building marketplace ecosystems or managing multiple stores under one infrastructure. This architecture allows:
                            </p>
                            <ul className="grid grid-cols-1 gap-3">
                                {["Multiple vendors or brands under one platform", "Role-based dashboards", "Centralized admin control", "Scalable infrastructure", "Commission & vendor management systems"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80 font-geist text-[15px]">
                                        <div className="size-1.5 rounded-full bg-[#9220E1]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-auto pt-6 border-t border-white/10">
                            <button className="flex items-center gap-2 text-[#9220E1] font-medium group/btn">
                                Explore Marketplace Builds <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center">
                    <button className="px-10 py-5 bg-[#7C3AED] text-white rounded-full font-semibold text-lg hover:bg-[#6D28D9] transition-all flex items-center gap-3">
                        Discuss Your Architecture Requirements
                        <Layers size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
