"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ProfileDownloadPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ProfileDownloadPopup({ isOpen, onClose }: ProfileDownloadPopupProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen || !mounted) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Save to MongoDB
            const response = await fetch("/api/profile-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to save lead information");
            }

            setIsSuccess(true);

            // Trigger the PDF download
            const pdfUrl = "/company-profile/Kajkarma Company Profile.pdf";
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.download = "KajKarma_Company_Profile.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Automatically close after success
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: "", email: "", phoneNumber: "" });
                onClose();
            }, 2500);
        } catch (error) {
            console.error("Submission failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-all";

    const modalContent = (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-[850px] my-auto rounded-[32px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
                style={{
                    background: "linear-gradient(180deg, #110B3B 0%, #39208F 100%)",
                    fontFamily: "Inter, sans-serif"
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-30 cursor-pointer"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="flex flex-col lg:flex-row min-h-[450px]">
                    {/* Left Side: Image (40%) */}
                    <div className="relative hidden lg:block lg:w-[40%] bg-white/5 order-1">
                        <Image
                            src="/company-profile/company-popup-rightimage.webp"
                            alt="Company Profile"
                            fill
                            className="object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#110B3B]/40 to-transparent" />
                    </div>

                    {/* Right Side: Form (60%) */}
                    <div className="flex-1 lg:w-[60%] p-6 sm:p-8 lg:p-10 order-2">
                        <h2
                            className="text-white text-3xl sm:text-4xl font-semibold mb-2 pr-8"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Company Profile
                        </h2>
                        <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
                            Enter your details below to instantly download our official company profile.
                        </p>

                        {isSuccess ? (
                            <div className="py-8 flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30 cursor-pionter">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e">
                                        <path d="M20 6L9 17L4 12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-white text-xl font-medium mb-1">Thank You!</h3>
                                <p className="text-white/60 text-sm">Your download has started.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-white/80 text-xs font-medium ml-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter your name"
                                            className={inputClasses}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-white/80 text-xs font-medium ml-1">Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            className={inputClasses}
                                            value={formData.phoneNumber}
                                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-white/80 text-xs font-medium ml-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="name@company.com"
                                        className={inputClasses}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 mt-2 rounded-xl bg-white text-[#110B3B] font-bold text-base hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-[#110B3B]" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        "Submit & Download"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
