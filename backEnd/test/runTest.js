import { getRecommendation } from "../src/modules/places/places.service.js";
import { dummyPlaces } from "../data/dummyPlaces.js";

const selectedMoods = ["alone"]

const result = getRecommendation(selectedMoods , dummyPlaces);

console.log(JSON.stringify(result , null ,2));