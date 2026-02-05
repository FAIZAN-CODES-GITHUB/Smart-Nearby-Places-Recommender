// import moods from "../modules/moods/moods";

export function validateMoods (req , res , next) {
    const body = req.body;
    


    if(!moods){
       return res.status(400).json({
            error : true,
            message : "Mood is required"

        })
    }
    const {moods} = req.body;

    if (!Array.isArray(moods)){
        return res.status(400).json({
            error : true,
            message : "Moods must be an array"
        })
    }


    if (moods.length === 0){
        return res.status(400).json({
            error : true,
            message : "Atleast one must be selected"
        })
        
    }

    const uniqueMoods = new Set(moods)
    if (uniqueMoods.size !== moods.length){
         return res.status(400).json({
            error : true,
            message : "Duplicates moods are not allowed"
        })
    }

    next();
}

//fucntion for validate signup

export function validateSignUp (req , res , next) {
    const body = req.body;

    if(!body){
        return res.status(400).json({
            error : true,
            message : "Request body is required"
        })
    }

    const {name , email , password} = body

    if (!name || typeof name !== "string" || name.trim() === ""){
        return res.status(400).json({
            error : true, 
            message : "Name is required and must be correct"
        })
    }

    if (!email || typeof email !== "string" || email.trim() === "" )

    if ( !password ||  typeof password !== "string" ||password.trim() === ""){
        return res.status(400).json({
            error : true ,
            message : "Password is required"
        })
    }
    next()
}

export function validateLogin (next , req , res ){
    const body = req.body;

    if ( !body){
        return res.status(400).json({
            error : true,
            message : "Request body is required"
        })
    }

    const {email , password} = body

    if (!email || typeof email !== "string" || email.trim() === ""){
        return res.status(400).json({
            error : true,
            message : "Email is requeired in correct format"
        })
    }

    if (!password || typeof password !== "string" || password.trim() === "" ){
        return res.status(400).json({
            error : true ,
            message : "Password is required in correct format"
        })
    }
    next();

}