"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";

export default function ContactPage() {
  const [form, setForm] = useState({ 
    firstName: "", 
    lastName: "", 
    phoneNumber: "", 
    description: "" 
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit");
      }

      setSuccess(true);
      setForm({ firstName: "", lastName: "", phoneNumber: "", description: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <section className="flex-1 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20">
            {/* Left Side - Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[56px] font-medium text-[#1d1d1f] leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-6">
                Let's work<br />together
              </h1>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#86868b] leading-[1.5] mb-8 sm:mb-10 max-w-[400px]">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] sm:text-[13px] text-[#86868b]">Email</p>
                    <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium break-all">hello@kajkarma.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] sm:text-[13px] text-[#86868b]">Phone</p>
                    <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium">+1 (555) 000-0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] sm:text-[13px] text-[#86868b]">Location</p>
                    <p className="text-[14px] sm:text-[15px] text-[#1d1d1f] font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#f5f5f7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              {success ? (
                <div className="h-full flex flex-col items-center justify-center py-8 sm:py-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500 flex items-center justify-center mb-4 sm:mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="sm:w-10 sm:h-10">
                      <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] font-medium text-[#1d1d1f] mb-2">Thank you!</h3>
                  <p className="text-[14px] sm:text-[15px] text-[#86868b] text-center px-4">We've received your message and will get back to you soon.</p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="mt-4 sm:mt-6 text-[14px] sm:text-[15px] text-[#6F5CF3] font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h2 className="text-[20px] sm:text-[24px] font-medium text-[#1d1d1f] mb-4 sm:mb-6">Send us a message</h2>

                  {error && (
                    <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-[13px] sm:text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[12px] sm:text-[13px] text-[#1d1d1f] font-medium mb-1.5 sm:mb-2">First Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John" 
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[14px] sm:text-[15px] rounded-xl bg-white border border-gray-200 text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#6F5CF3] focus:ring-1 focus:ring-[#6F5CF3] transition-colors"
                        value={form.firstName} 
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })} 
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] sm:text-[13px] text-[#1d1d1f] font-medium mb-1.5 sm:mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Doe" 
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[14px] sm:text-[15px] rounded-xl bg-white border border-gray-200 text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#6F5CF3] focus:ring-1 focus:ring-[#6F5CF3] transition-colors"
                        value={form.lastName} 
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })} 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] sm:text-[13px] text-[#1d1d1f] font-medium mb-1.5 sm:mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+1 (555) 000-0000" 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[14px] sm:text-[15px] rounded-xl bg-white border border-gray-200 text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#6F5CF3] focus:ring-1 focus:ring-[#6F5CF3] transition-colors"
                      value={form.phoneNumber} 
                      onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} 
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] sm:text-[13px] text-[#1d1d1f] font-medium mb-1.5 sm:mb-2">Message *</label>
                    <textarea 
                      required 
                      rows={4}
                      placeholder="Tell us about your project..." 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[14px] sm:text-[15px] rounded-xl bg-white border border-gray-200 text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#6F5CF3] focus:ring-1 focus:ring-[#6F5CF3] transition-colors resize-none sm:rows-5"
                      value={form.description} 
                      onChange={(e) => setForm({ ...form, description: e.target.value })} 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="w-full py-3 sm:py-4 rounded-full bg-black text-white font-medium text-[14px] sm:text-[15px] hover:bg-black/90 disabled:opacity-70 transition-colors"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
