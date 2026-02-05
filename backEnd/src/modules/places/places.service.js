import { hasMoodConflicts } from "../moods/moodConflictResolver.js";
import { interpretMoods } from "../moods/moodInterpreter.js";
import { filterPlaces } from "./placeFilter.js";
import { rankPlaces } from "./placeRanker.js";


export  function  getRecommendation(selectedMoods , places) {
    if ( hasMoodConflicts(selectedMoods)){
        return {
            error : true,
            message : "Selected moods conflict. Please refine your choice.",
        }
    }

    const intent = interpretMoods(selectedMoods);

    const filteredPlaces = filterPlaces(places, intent);
''
    const rankedPlaces = rankPlaces(filteredPlaces, intent);


    return {
        error : false,
        intent,
        places: rankedPlaces 
    }
}