import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ProfileLead } from '@/lib/models/ProfileLead';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phoneNumber } = body;

        if (!name || !email || !phoneNumber) {
            return NextResponse.json(
                { error: 'Name, email, and phone number are required' },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const lead = await ProfileLead.create({
            name,
            email,
            phoneNumber,
        });

        return NextResponse.json(
            { message: 'Lead saved successfully', id: lead._id },
            { status: 201 }
        );
    } catch (error) {
        console.error('Profile lead storage error:', error);
        return NextResponse.json(
            { error: 'Failed to save lead information' },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        // Verify admin token
        const authHeader = request.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { verifyToken } = await import('@/lib/auth');
        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);

        if (!decoded || decoded.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectToDatabase();
        const leads = await ProfileLead.find().sort({ createdAt: -1 });

        return NextResponse.json({ leads });
    } catch (error) {
        console.error('Fetch leads error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch leads' },
            { status: 500 }
        );
    }
}
