import { users } from "../modules/auth/auth.service.js";

export function authMiddleware(req , res , next){
    try {
        req.user = null;

        const userIdHeader = req.headers["x-user-id"]

        if(!userIdHeader){
            return next() ;
        }

        const userId = Number(userIdHeader)

        if(Number.isNaN(userId)){
            return next();
        }

        const foundUser = users.find(user =>user.id === userId)

        if ( !foundUser){
            return next();
        }

        req.user = {
            id :foundUser.id,
            name : foundUser.name,
            email : foundUser.email
        };

        next()



    } catch (error) {
        req.user === null 
        next();
    }
}