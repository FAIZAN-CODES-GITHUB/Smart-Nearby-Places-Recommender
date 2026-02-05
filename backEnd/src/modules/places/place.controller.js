import { getRecommendation } from "./places.service.js";
import { dummyPlaces } from "../../../data/dummyPlaces.js";


export function recommendPlaces (req ,res){
    try {
        const {moods} = req.body ;

        if ( !moods || !Array.isArray(moods)) {
            return res.status(400).json({
                error : true,
                message : "Mood must be an array"
            })

        }

        const result = getRecommendation(moods , dummyPlaces)

        if (result.error){
            return res.status(400).json(result)
        }

        const response = {
            error : false,
            intent : result.intent,
            places : result.places
        };


        res.status(200).json(response); 

        const topPlace = result.places.slice(0, 3);

        recordHistory({
            userId : req.user.id ||null, //For anonymous
            moods,
            intent :result.intent,
            places : topPlace,
            timestamp : new Date()
        })


    } catch (error) {
        res.status(500).json({
            error : true,
            message : error.message
        })
    }
}