import { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { SocialMediaHero } from "./hero";

export const metadata: Metadata = {
    title: "Social Media Management | KAJKARMA",
    description: "Expert social media management services to grow your brand and engage your audience.",
};

export default function SocialMediaPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <SocialMediaHero />
        </main>
    );
}
