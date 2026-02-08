import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDatabase() {
  try {
  await  mongoose.connect(env.MONGO_URI)
    console.log(`Connected to MongoDB`);
    
  } catch (error) {
    console.error("Database connection Failed:", error);

    process.exit(1);
  }
}