import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    description: string;
    date: string; // Format: YYYY-MM-DD
    time: string; // Format: HH:mm
    createdAt: Date;
}

const BookingSchema = new Schema<IBooking>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Prevent duplicate bookings for the same date and time
BookingSchema.index({ date: 1, time: 1 }, { unique: true });

export const Booking = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);
