import dotenv from 'dotenv';


dotenv.config();

export const env = {
PORT : process.env.PORT || 3000,
MONGO_URI : process.env.MONGO_URI,
NODE_ENV : process.env.NODE_ENV || 'development',
JWT_SECRET: process.env.JWT_SECRET,
JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d'
}

if (!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in environment variables")
}