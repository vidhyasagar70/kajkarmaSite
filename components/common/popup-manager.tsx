"use client";

import React, { useEffect, useState } from "react";
import { ScheduleMeetingModal } from "./schedule-meeting-modal";

export function PopupManager() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Only show if not shown in this session
        const hasShown = sessionStorage.getItem("meeting-popup-shown");

        if (!hasShown) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem("meeting-popup-shown", "true");
            }, 10000); // 20 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <ScheduleMeetingModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        />
    );
}
