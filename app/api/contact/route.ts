import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Contact } from '@/lib/models/Contact';
import { sendNotificationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, phoneNumber, description } = body;

    if (!firstName || !lastName || !phoneNumber || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const contact = await Contact.create({
      firstName,
      lastName,
      phoneNumber,
      description,
    });

    // Send email notification
    await sendNotificationEmail({ firstName, lastName, phoneNumber, description });

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: contact._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
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
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Fetch contacts error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
