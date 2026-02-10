// import { users } from "../modules/auth/auth.service.js";
import { verifyToken } from "../utils/jwt.js";
import { User } from "../modules/users/user.model.js";

export async function authMiddleware(req , res , next){
   console.log("🟡 authMiddleware HIT");
  try {
    req.user = null

    const authHeader = req.headers.authorization
    

    if(!authHeader){
      
      return next()

    }
    const [type , token] =authHeader.split(" ")

    if ( type !== "Bearer" || !token){
       
      return next()
    }
    
    
    const decoded = verifyToken(token)

    const user = await User.findById(decoded.userId)

    if (!user){
      return next() 
    }
    
    req.user = {
      id: user._id,
      name: user.name,
      email: user.email,
    }

     return next() ;


  } catch (error) {
    req.user = null;
    return next();
  }

}





  //Main Functionality
    // try {
    //     req.user = null;

    //     const userIdHeader = req.headers["x-user-id"]

    //     if(!userIdHeader){
    //         return next() ;
    //     }

    //     const userId = Number(userIdHeader)

    //     if(Number.isNaN(userId)){
    //         return next();
    //     }

    //     const foundUser = users.find(user =>user.id === userId)

    //     if ( !foundUser){
    //         return next();
    //     }

    //     req.user = {
    //         id :foundUser.id,
    //         name : foundUser.name,
    //         email : foundUser.email
    //     };

    //     next()
    
//   const userId = req.headers["x-user-id"];
 
//   if (userId) {
//     req.user = { id: userId };
//   } else {
//     req.user = null;
//   }

//   next();
// }


    // } catch (error) {
    //     req.user === null 
    //     next();
    // }