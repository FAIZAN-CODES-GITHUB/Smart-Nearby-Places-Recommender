// export const users = [];

// old signupController logic
// export function signUpUser  (userData) {
//     const {name , email , password}  = userData;


//     const existingUser  = users.find(user => user.email === email);

//     if (existingUser){
//         return {
//             error : true ,
//             message : "User Already Exist"
//         }
//     }

//     const newUser = {
//         id : users.length + 1,
//         name,
//         email,
//         password
//     }

//     users.push(newUser)

//     return {
//         error : false,
//         user : {
//             id : newUser.id,
//             name : newUser.name ,
//             email : newUser.email,
            
//         }

//     }
// } 

// export function loginUser (credentials){
//     const {email , password} = credentials

//     const founduser = users.find(user => user.email === email)

//     if( !founduser || founduser.password !== password){
//         return {
//             error : true ,
//             message : "Invalid username or password"
//         }
//     }

//     return {
//         error : false,
//         user: {
//             id : founduser.id,
//             name : founduser.name,
//             email: founduser.email
//         }
//     }

// }