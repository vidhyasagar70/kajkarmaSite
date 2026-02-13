import { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { EcommerceHero } from "./hero";


export const metadata: Metadata = {
    title: "Ecommerce | KajKarma",
    description: "Powerful ecommerce solutions for your business.",
};

export default function EcommercePage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <EcommerceHero />
            
        </main>
    );
}
