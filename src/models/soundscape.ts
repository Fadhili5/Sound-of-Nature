import mongoose from 'mongoose';

const SoundscapeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Soundscape = mongoose.models.Soundscape || mongoose.model('Soundscape', SoundscapeSchema); 