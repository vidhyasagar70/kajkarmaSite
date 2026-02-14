"use client";

export function AppTimelineSection() {
    return (
        <section className="w-full bg-[#f8f7fc] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
                    {/* Left Column - Title */}
                    <div className="w-full lg:w-1/3">
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31]">
                            Application Development <span className="text-[#7C3AED]">Timeline</span>
                        </h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-6 sm:gap-8">
                        <p className="font-geist font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-relaxed text-[#0A0E31]/80">
                            Our development timeline is structured around clear milestones. Most ecommerce and custom web applications are delivered within 6–12 weeks depending on feature requirements.
                        </p>
                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            Each phase includes architecture planning, UI/UX design, backend development, testing, deployment, and optimization. We follow an agile methodology to ensure consistent progress and transparent communication. This approach allows us to iterate quickly based on feedback while maintaining a high standard of quality.
                        </p>

                        {/* Simple Milestone Indicators */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {[
                                { label: "Design Phase", duration: "2-3 Weeks" },
                                { label: "Core Development", duration: "4-8 Weeks" },
                                { label: "Integration & Testing", duration: "1-2 Weeks" },
                                { label: "Deployment & Optimization", duration: "1 Week" }
                            ].map((milestone, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#F0F0F0]">
                                    <p className="text-[#7C3AED] font-medium text-sm tracking-wide uppercase mb-1">{milestone.label}</p>
                                    <p className="text-[#0A0E31] text-xl font-semibold">{milestone.duration}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
