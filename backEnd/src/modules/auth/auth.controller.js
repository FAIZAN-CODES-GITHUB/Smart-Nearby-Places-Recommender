// import { signUpUser, loginUser } from "./auth.service.js";
import { loginUser } from "../users/user.service.js";
import {generateToken} from "../../utils/jwt.js"


// old signipcontroller logic 
// export function signUpController(req, res) {
//   try {
//     const userData = req.body;

//     const result = signUpUser(userData);

//     if (result.error) {
//       return res.status(400).json({
//         error: true,
//         message: result.message,
//       });
//     }
//     return (
//       res.status(201).json({
//         error: false,
//         user: result.user,
//       })
//     );
//   } 
//   catch (error) {
//     console.error("Signup error:", error);

//     return res.status(500).json({
//       error: true,
//       message: error.message,
//     });
//   }
// }
// for old login controller
// export function loginController(req, res) {
//   try {
//     const credentials = req.body;

//     const result = loginUser(credentials);

//     if (result.error) {
//       return res.status(400).json({
//         error: true,
//         message: result.message,
//       });
//     }

//     return res.status(200).json({
//       error: false,
//       user: result.user,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       error: true,
//       message: "Something went wrong during login",
//     });
//   }
// }

// export function loginController(req, res) {
//   try {
//     const credentials = req.body;

//     const result = loginUser(credentials);

//     if (result.error) {
//       return res.status(401).json({
//         error: true,
//         message: result.message,
//       });
//     }

//     return res.status(200).json({
//       error: false,
//       user: result.user,
//     });
//   } catch (error) {
//     console.error("Login error:", error);

//     return res.status(500).json({
//       error: true,
//       message: error.message,
//     });
//   }
// }




export async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    const user = await loginUser({ email, password });

    const token = generateToken({ userId : user.id})
    
    return res.status(200).json({
      error: false,
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error.message,
    });
  }
}

