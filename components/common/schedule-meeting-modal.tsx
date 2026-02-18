"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Phone, Calendar as CalendarIcon, ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Modal,
    ModalContent,
} from "@/components/ui/modal";

type Step = "callback" | "book" | "success";

interface ScheduleMeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ScheduleMeetingModal({ isOpen, onClose }: ScheduleMeetingModalProps) {
    const [step, setStep] = useState<Step>("callback");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        description: "",
        date: "",
        time: "",
    });
    const [loading, setLoading] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [bookedTimeSlots, setBookedTimeSlots] = useState<string[]>([]);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [error, setError] = useState("");

    const resetModal = () => {
        setStep("callback");
        setFormData({ name: "", phone: "", description: "", date: "", time: "" });
        setCurrentMonth(new Date());
        setAvailableSlots([]);
        setBookedTimeSlots([]);
        setError("");
        setLoadingSlots(false);
    };

    const handleClose = () => {
        onClose();
        setTimeout(resetModal, 300);
    };

    const fetchSlots = async (date: string) => {
        setFormData({ ...formData, date });
        setLoadingSlots(true);
        setAvailableSlots([]);
        try {
            const res = await fetch(`/api/bookings?date=${date}`);
            const data = await res.json();

            // Safeguard if data.bookedSlots is undefined
            const bookedSlots = Array.isArray(data.bookedSlots) ? data.bookedSlots : [];
            setBookedTimeSlots(bookedSlots);

            // Generate all slots from 8am to 10pm (22:00)
            const allSlots = [];
            for (let i = 8; i <= 22; i++) {
                allSlots.push(`${i}:00`);
                allSlots.push(`${i}:30`);
            }

            // Keep all slots, don't filter booked ones yet (handled in render)
            let slots = allSlots;

            // Logic to filter past times for today
            // Create date object from string (YYYY-MM-DD) in local time
            const [year, month, day] = date.split('-').map(Number);
            const selectedDate = new Date(year, month - 1, day);

            const today = new Date();
            today.setHours(0, 0, 0, 0); // Normalize today to midnight for date comparison

            if (selectedDate.getTime() === today.getTime()) {
                const now = new Date();
                const currentHour = now.getHours();
                const currentMinute = now.getMinutes();

                slots = slots.filter(s => {
                    const [h, m] = s.split(':').map(Number);
                    return h > currentHour || (h === currentHour && m > currentMinute);
                });
            } else if (selectedDate < today) {
                // Should not happen due to disabled dates, but safe guard
                slots = [];
            }

            setAvailableSlots(slots);
        } catch (err) {
            console.error("Error fetching slots:", err);
            // In case of error, maybe show all slots or none? Safe to show none and error.
            setError("Could not load time slots. Please try again.");
        } finally {
            setLoadingSlots(false);
        }
    };

    const handleSubmitCallback = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: formData.name.split(" ")[0] || "Client",
                    lastName: formData.name.split(" ").slice(1).join(" ") || "User",
                    phoneNumber: formData.phone,
                    description: formData.description,
                }),
            });
            if (res.ok) {
                setStep("success");
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setError("Failed to submit. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: formData.name.split(" ")[0] || "Client",
                    lastName: formData.name.split(" ").slice(1).join(" ") || "User",
                    phoneNumber: formData.phone,
                    description: formData.description,
                    date: formData.date,
                    time: formData.time
                }),
            });

            if (res.ok) {
                setStep("success");
            } else {
                const data = await res.json();
                setError(data.error || "Failed to book meeting.");
            }
        } catch (error) {
            console.error(error);
            setError("Failed to book meeting. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const navigateMonth = (direction: number) => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1));
    };

    const days = Array.from({ length: getDaysInMonth(currentMonth) }, (_, i) => i + 1);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const monthName = currentMonth.toLocaleString('default', { month: 'long' });
    const year = currentMonth.getFullYear();

    const renderChoiceToggles = () => (
        <div className="flex bg-slate-100/80 p-1 rounded-2xl w-fit mb-4 sm:mb-6">
            <button
                onClick={() => setStep("callback")}
                className={cn(
                    "px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1 sm:gap-2",
                    step === "callback"
                        ? "bg-white text-[#6450F0] shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                )}
            >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> CALL BACK
            </button>
            <button
                onClick={() => setStep("book")}
                className={cn(
                    "px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1 sm:gap-2",
                    step === "book"
                        ? "bg-white text-[#6450F0] shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                )}
            >
                <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4" /> BOOK A CALL
            </button>
        </div>
    );

    const renderContent = () => {
        switch (step) {
            case "callback":
                return (
                    <div className="space-y-3 animate-fade-in flex flex-col">
                        <div className="space-y-1">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#110B3B] font-grotesque">Schedule a Meeting</h2>
                            <p className="text-slate-500 font-poppins text-sm sm:text-base lg:text-lg">Tell us a bit about your needs.</p>
                        </div>

                        {renderChoiceToggles()}

                        <form onSubmit={handleSubmitCallback} className="space-y-3 sm:space-y-4">
                            <div className="space-y-3 sm:space-y-4">
                                <div className="space-y-1">
                                    <label className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins ml-1">Full Name</label>
                                    <Input
                                        required
                                        placeholder="John Doe"
                                        className="h-10 sm:h-12 lg:h-14 text-sm sm:text-base border-2 border-slate-100 bg-slate-50 focus:bg-white rounded-xl sm:rounded-2xl font-poppins px-4 sm:px-6 shadow-sm text-slate-800 placeholder:text-slate-400"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins ml-1">Phone Number</label>
                                    <Input
                                        required
                                        type="tel"
                                        placeholder="+1 (000) 000-0000"
                                        className="h-10 sm:h-12 lg:h-14 text-sm sm:text-base border-2 border-slate-100 bg-slate-50 focus:bg-white  rounded-xl sm:rounded-2xl font-poppins px-4 sm:px-6 shadow-sm text-slate-800 placeholder:text-slate-400"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={2}
                                        className="w-full rounded-xl sm:rounded-2xl border-2 border-slate-100 bg-slate-50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6450F0] focus:border-[#6450F0] resize-none font-poppins shadow-sm text-slate-800 placeholder:text-slate-400"
                                        placeholder="Briefly describe your requirements..."
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>
                            </div>
                            <Button disabled={loading} className="w-full h-10 sm:h-12 bg-gradient-to-r from-[#9333ea] to-[#8b5cf6] hover:brightness-110 text-white font-bold text-sm sm:text-base rounded-full transition-all shadow-lg shadow-purple-100">
                                {loading ? "SENDING..." : "REQUEST CALL BACK"}
                            </Button>
                        </form>
                    </div>
                );
            case "book":
                return (
                    <div className="space-y-3 sm:space-y-4 animate-fade-in flex flex-col">
                        <div className="space-y-1">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#110B3B] font-grotesque">Schedule a Meeting</h2>
                            <p className="text-slate-500 font-poppins text-sm sm:text-base lg:text-lg">Pick a day that works best.</p>
                        </div>

                        {renderChoiceToggles()}

                        {!formData.date ? (
                            <div className="bg-slate-50 rounded-2xl sm:rounded-[2rem] p-3 sm:p-4 lg:p-6 border-2 border-slate-100">
                                <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold font-grotesque text-[#110B3B]">{monthName} {year}</h3>
                                    <div className="flex gap-1">
                                        <button type="button" onClick={() => navigateMonth(-1)} className="p-1 hover:bg-white rounded-full transition-colors"><ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" /></button>
                                        <button type="button" onClick={() => navigateMonth(1)} className="p-1 hover:bg-white rounded-full transition-colors"><ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" /></button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                        <div key={day} className="text-center text-[6px] sm:text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{day}</div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-0.5 sm:gap-1 lg:gap-2">
                                    {Array.from({ length: firstDay }).map((_, i) => (
                                        <div key={`empty-${i}`} />
                                    ))}
                                    {days.map(day => {
                                        const dateStr = `${year}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                                        const isToday = new Date().toISOString().split('T')[0] === dateStr;
                                        const isPast = new Date(dateStr) < new Date(new Date().setHours(0, 0, 0, 0));

                                        return (
                                            <button
                                                key={day}
                                                type="button"
                                                disabled={isPast}
                                                onClick={() => fetchSlots(dateStr)}
                                                className={cn(
                                                    "aspect-square rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center font-bold font-poppins text-[10px] sm:text-xs lg:text-sm transition-all",
                                                    isPast ? "text-slate-300 cursor-not-allowed" : "hover:bg-white hover:text-[#6450F0] text-slate-600 bg-white/50"
                                                )}
                                            >
                                                {day}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : !formData.time ? (
                            <div className="space-y-4 animate-slide-up">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-[#110B3B]">Select Time</h3>
                                    <button onClick={() => setFormData({ ...formData, date: "" })} className="text-[#6450F0] font-bold text-xs underline decoration-2 underline-offset-4">Change Date</button>
                                </div>
                                <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-2">
                                    {loadingSlots ? (
                                        <div className="col-span-3 text-center py-8 text-slate-500">Loading slots...</div>
                                    ) : availableSlots.length === 0 ? (
                                        <div className="col-span-3 text-center py-8 text-slate-500">No slots available for this date.</div>
                                    ) : (
                                        availableSlots.map((time) => {
                                            const isBooked = bookedTimeSlots.includes(time);
                                            return (
                                                <button
                                                    key={time}
                                                    disabled={isBooked}
                                                    onClick={() => !isBooked && setFormData({ ...formData, time })}
                                                    className={cn(
                                                        "py-2 px-3 rounded-lg border-2 font-poppins text-sm transition-colors",
                                                        isBooked
                                                            ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                                                            : "bg-white border-slate-300 text-slate-900 border-2 hover:border-[#6450F0] hover:text-[#6450F0] hover:bg-slate-50 font-medium"
                                                    )}
                                                >
                                                    {time}
                                                </button>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-3 lg:pt-4 animate-slide-up">
                                <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#110B3B] font-grotesque">Complete Booking</h3>
                                        <button onClick={() => setFormData({ ...formData, time: "" })} className="text-[#6450F0] font-bold text-xs underline decoration-2 underline-offset-4">Change Time</button>
                                    </div>
                                    <p className="text-slate-500 font-poppins text-xs sm:text-sm lg:text-base">Meeting on {formData.date} at {formData.time}</p>
                                </div>

                                <form onSubmit={handleSubmitBooking} className="space-y-3 sm:space-y-4">
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins ml-1">Full Name</label>
                                            <Input
                                                required
                                                placeholder="John Doe"
                                                className="h-10 sm:h-12 lg:h-14 text-sm sm:text-base border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-[#6450F0] rounded-xl sm:rounded-2xl font-poppins px-4 sm:px-6 shadow-sm text-slate-800 placeholder:text-slate-400"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins ml-1">Phone Number</label>
                                            <Input
                                                required
                                                type="tel"
                                                placeholder="+1 (000) 000-0000"
                                                className="h-10 sm:h-12 lg:h-14 text-sm sm:text-base border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-[#6450F0] rounded-xl sm:rounded-2xl font-poppins px-4 sm:px-6 shadow-sm text-slate-800 placeholder:text-slate-400"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins ml-1">Topic</label>
                                            <textarea
                                                required
                                                rows={2}
                                                className="w-full rounded-xl sm:rounded-2xl border-2 border-slate-100 bg-slate-50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6450F0] focus:border-[#6450F0] resize-none font-poppins shadow-sm text-slate-800 placeholder:text-slate-400"
                                                placeholder="What would you like to discuss?"
                                                value={formData.description}
                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        disabled={loading}
                                        className="w-full h-10 sm:h-12 bg-gradient-to-r from-[#9333ea] to-[#8b5cf6] hover:brightness-110 text-white font-bold text-sm sm:text-base rounded-full transition-all shadow-lg shadow-purple-100"
                                    >
                                        {loading ? "BOOKING..." : "CONFIRM BOOKING"}
                                    </Button>
                                    {error && <p className="text-red-500 text-xs text-center">{error}</p>}
                                </form>
                            </div>
                        )}
                    </div>
                );
            case "success":
                return (
                    <div className="flex flex-col items-center justify-center py-4 sm:py-6 text-center space-y-4 sm:space-y-6 animate-fade-in min-h-[250px] sm:min-h-[300px]">
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-green-200 blur-3xl rounded-full opacity-30 animate-pulse" />
                            <div className="relative w-16 h-16 sm:w-20 lg:w-24 xl:w-32 sm:h-20 lg:h-24 xl:h-32 bg-green-50 rounded-full flex items-center justify-center text-green-500 border-4 sm:border-8 border-white shadow-2xl">
                                <CheckCircle2 className="w-8 h-8 sm:w-10 lg:w-12 xl:w-16 sm:h-10 lg:h-12 xl:h-16" />
                            </div>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#110B3B] font-grotesque">Success!</h3>
                            <p className="text-slate-500 max-w-[300px] sm:max-w-[360px] font-poppins text-base sm:text-lg lg:text-xl leading-relaxed">
                                Your meeting request is confirmed. <br className="hidden sm:block" /> Check your inbox soon.
                            </p>
                        </div>
                        <Button
                            onClick={handleClose}
                            className="mt-1 sm:mt-2 px-8 sm:px-12 lg:px-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#110B3B] hover:bg-black text-white font-bold text-base sm:text-lg lg:text-xl transition-all shadow-xl"
                        >
                            BACK TO WEBSITE
                        </Button>
                    </div>
                );
        }
    };

    return (
        <Modal open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            <ModalContent className="max-w-[90vw] sm:max-w-3xl lg:max-w-4xl xl:max-w-3xl w-full p-0 overflow-hidden bg-white border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-2xl sm:rounded-3xl lg:rounded-[32px] my-4 sm:my-6 md:my-auto">
                <div className="flex flex-col lg:flex-row min-h-[450px] max-h-[90vh] lg:max-h-[85vh]">
                    {/* Left Side: Professional Image & Branding */}
                    <div className="relative hidden lg:block lg:w-[40%] bg-[#110B3B] overflow-hidden">
                        <Image
                            src="/popup/popup.jpg"
                            alt="Company Branding"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right Side: Dynamic Content */}
                    <div className="relative flex-1 lg:w-[60%] flex flex-col bg-white overflow-hidden">
                        <button
                            onClick={handleClose}
                            className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 p-1.5 sm:p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-[#6450F0] transition-all duration-300 z-50 group bg-white shadow-sm"
                        >
                            <X className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:rotate-90 transition-transform" />
                        </button>

                        <div className="w-full h-full overflow-y-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-10 scroll-smooth scrollbar-hide">
                            <div className="min-h-full flex flex-col justify-center max-w-[500px] mx-auto">
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </ModalContent>
        </Modal>
    );
}