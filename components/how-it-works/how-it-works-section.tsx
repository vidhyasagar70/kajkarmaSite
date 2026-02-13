"use client";

const steps = [
  {
    number: 1,
    title: "Share Your Requirements",
    description:
      "We understand your business, services, audience, and branding to align the white-label solution with how you sell and deliver.",
  },
  {
    number: 2,
    title: "Customize & White-Label",
    description:
      "We tailor the platform, workflows, and features while applying your branding so everything looks and feels like your own product.",
  },
  {
    number: 3,
    title: "Integrate & Test",
    description:
      "The solution is integrated with your tools and thoroughly tested to ensure smooth performance and reliable automation.",
  },
  {
    number: 4,
    title: "Launch & Scale",
    description:
      "You go live quickly while we manage the backend, updates, and scalability as your business grows.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="relative w-full"
      style={{
        background:
          "linear-gradient(180deg, #1F0A3B 17.42%, #601A91 75.2%, #9220E1 113.76%)",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1440px" }}>
        {/* Heading */}
        <h2
          className="font-clash text-center"
          style={{
            fontWeight: 500,
            fontSize: "54px",
            lineHeight: "54px",
            letterSpacing: "0%",
            marginBottom: "88px",
          }}
        >
          <span className="text-white">How It </span>
          <span style={{ color: "#9220E1" }}>Works</span>
        </h2>

        {/* Steps Container */}
        <div
          className="flex flex-col items-center mx-auto"
          style={{ maxWidth: "815px", gap: "20px" }}
        >
          {steps.map((step) => (
            <div key={step.number} className="relative w-full">
              {/* Number Circle */}
              <div className="flex justify-center -mb-[34px] relative z-10">
                <div
                  className="flex items-center justify-center rounded-full font-geist text-white"
                  style={{
                    width: "68px",
                    height: "68px",
                    backgroundColor: "#9220E1",
                    padding: "12px",
                    fontSize: "46px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    textAlign: "center",
                  }}
                >
                  {step.number}
                </div>
              </div>

              {/* Card */}
              <div
                className="relative rounded-[20px]"
                style={{
                  padding: "38px",
                  paddingTop: "50px",
                  background: "rgba(13, 9, 45, 0.2)",
                }}
              >
                {/* Gradient border */}
                <div
                  className="absolute inset-0 rounded-[20px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(45deg, #6C219F 24.46%, #9220E1 50.07%, #6C219F 75.67%)",
                    padding: "1.4px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Title */}
                <h3
                  className="font-geist text-center mb-3"
                  style={{
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "22px",
                    letterSpacing: "0%",
                    color: "#EBEEFF",
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="font-geist text-center"
                  style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "22px",
                    letterSpacing: "0%",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
