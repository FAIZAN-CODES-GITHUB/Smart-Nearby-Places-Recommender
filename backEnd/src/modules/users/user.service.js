import bcrypt from 'bcrypt';
import { User } from './user.model.js';



export async function signupUser ({name , email , password}) {


    if ( !name || ! email || !password){
        throw new Error("Name , Email And Password are required")
    }


    if ( password.length < 8)  {
        throw new Error("Password must be at least 8 characters.")
    }
    
    const existingUser = await User.find({email})
    
    if ( existingUser){
        throw new Error("Email already exists")
    }

    const hashedPassword  = await bcrypt.hash(password, 10);

    const user = await User.create({
        name, 
        email,
        password : hashedPassword
    })

    return {
        id : user._id,
        name : user.name,
        email : user.email
    };

}