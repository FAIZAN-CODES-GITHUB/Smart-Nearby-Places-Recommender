import app from "./app.js";
import { env } from "./config/env.js";
import { connectDatabase } from "./config/database.js";




// app.post("/recommend" , (req, res) => {     Logic For Dummy Test
//     try {
//         const {moods} = req.body

//         const result = getRecommendation(moods, dummyPlaces);

//         if ( result.error){
//             return res.status(400).json(result)
//         }
//         res.json(result);
//     } catch (error) {
//         res.status(500).json({
//             error: true,
//             message :error.message
//         })
        
//     }
// })


async function startServer() {
    await connectDatabase();
    

    app.listen(env.PORT , () =>{
        console.log(`Server Running on port ${env.PORT}`)
    })
}

startServer();

// const PORT = 3000 


// app.listen(3000 , () => {
//     console.log("Server running on port 3000")
// })