"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactPopup({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ firstName: "", lastName: "", phoneNumber: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

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

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-[90%] max-w-[500px] rounded-2xl p-6 sm:p-8" style={{ background: "linear-gradient(180deg, #110B3B 0%, #39208F 100%)" }}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>

        <h2 className="text-white text-[24px] sm:text-[32px] mb-2" style={{ fontFamily: "Poppins" }}>Contact Us</h2>
        <p className="text-white/70 text-sm mb-6" style={{ fontFamily: "Inter" }}>Fill out the form below and we'll get back to you soon.</p>

        {success ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-white text-xl font-medium">Thank you!</p>
            <p className="text-white/70 mt-2">We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 text-sm mb-1.5">First Name</label>
                <input type="text" required placeholder="John" className={inputStyle} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-1.5">Last Name</label>
                <input type="text" required placeholder="Doe" className={inputStyle} value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-1.5">Phone Number</label>
              <input type="tel" required placeholder="+1 (555) 000-0000" className={inputStyle} value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} />
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-1.5">Description</label>
              <textarea required rows={4} placeholder="Tell us about your project..." className={`${inputStyle} resize-none`} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>

            <button type="submit" disabled={loading} className="w-full py-3.5 rounded-lg bg-white text-[#6450F0] font-medium hover:bg-white/90 disabled:opacity-70">
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
