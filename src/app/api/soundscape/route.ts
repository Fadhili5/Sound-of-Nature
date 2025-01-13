import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { connectDB } from '@/lib/mongodb';
import { Soundscape } from '@/models/soundscape';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const soundscapes = await Soundscape.find({ userId: session.user.id });
    
    return NextResponse.json({ soundscapes });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch soundscapes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    await connectDB();

    const newSoundscape = new Soundscape({
      ...body,
      userId: session.user.id,
    });

    await newSoundscape.save();
    
    return NextResponse.json({ message: 'Soundscape created successfully', soundscape: newSoundscape });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create soundscape' }, { status: 500 });
  }
} 