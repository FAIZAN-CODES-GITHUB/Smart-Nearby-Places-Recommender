import bcrypt from 'bcrypt';
import { User } from './user.model.js';



export async function signupUser ({name , email , password}) {


    if ( !name || ! email || !password){
        throw new Error("Name , Email And Password are required")
    }


    if ( password.length < 8)  {
        throw new Error("Password must be at least 8 characters.")
    }
    
    const existingUser = await User.findOne({email : email})
    // console.log("EXISTING USER:", existingUser);
    
    if (existingUser){
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


export async function loginUser ({email , password}){
   if ( !email || !password){
    throw new Error("Email And Password are required")
   }

   const user = await User.findOne({email})

   if(!user){
    throw new Error("Invalid email or password")
   }

   const isPasswordValid = await bcrypt.compare(password , user.password)

   if (!isPasswordValid){
    throw new Error("Invalid email or password")
   }

   return {
    id : user._id,
    name : user.name,
    email : user.email
   }

}