import app from "./app.js";




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

const PORT = 3000 


app.listen(3000 , () => {
    console.log("Server running on port 3000")
})