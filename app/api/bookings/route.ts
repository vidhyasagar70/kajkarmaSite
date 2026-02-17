import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Booking } from '@/lib/models/Booking';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const date = searchParams.get('date');

        if (!date) {
            return NextResponse.json(
                { error: 'Date parameter is required' },
                { status: 400 }
            );
        }

        await connectToDatabase();

        // Fetch all bookings for the specified date
        const bookings = await Booking.find({ date }).select('time -_id');
        const bookedSlots = bookings.map(b => b.time);

        return NextResponse.json({ bookedSlots });
    } catch (error) {
        console.error('Fetch bookings error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch bookings' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, phoneNumber, description, date, time } = body;

        if (!firstName || !lastName || !phoneNumber || !description || !date || !time) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        await connectToDatabase();

        // Check if slot is already booked (double safety with unique index)
        const existingBooking = await Booking.findOne({ date, time });
        if (existingBooking) {
            return NextResponse.json(
                { error: 'This time slot is already booked.' },
                { status: 409 }
            );
        }

        const booking = await Booking.create({
            firstName,
            lastName,
            phoneNumber,
            description,
            date,
            time,
        });

        return NextResponse.json(
            { message: 'Booking confirmed successfully', id: booking._id },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Booking submission error:', error);
        if (error.code === 11000) {
            return NextResponse.json(
                { error: 'This time slot is already booked.' },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { error: `Failed to create booking: ${error.message}` },
            { status: 500 }
        );
    }
}
