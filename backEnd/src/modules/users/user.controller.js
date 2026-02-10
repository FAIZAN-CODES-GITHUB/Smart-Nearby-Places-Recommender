import { signupUser } from "./user.service.js";


export async function signupController(req , res) {
    try {
        const {name , email , password} = req.body;

        const user = await signupUser({name , email , password})

        res.status(201).json({
            error : false,
            message : "User created successfully",
            data : user
        })
    } catch (error) {
         return res.status(400).json({
      error: true,
      message: error.message,
    });
    }
}