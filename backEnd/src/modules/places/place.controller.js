import { getRecommendation } from "./places.service.js";
import { recordHistory } from "../../history/history.service.js";
import { dummyPlaces } from "../../../data/dummyPlaces.js";

export async function recommendPlaces(req, res) {
  try {
    const { moods } = req.body;

    // 1️⃣ Validate input
    if (!moods || !Array.isArray(moods)) {
      return res.status(400).json({
        error: true,
        message: "Mood must be an array",
      });
    }

    // 2️⃣ Run recommendation logic
    const result = getRecommendation(moods , dummyPlaces );

    if (result.error) {
      return res.status(400).json(result);
    }

    // 3️⃣ Prepare response
    const response = {
      error: false,
      intent: result.intent,
      places: result.places,
    };

    // 4️⃣ Send response FIRST
    res.status(200).json(response);

    // 5️⃣ Save history ONLY if recommendation is valid
    if (Array.isArray(result.places) && result.places.length > 0) {
      const topPlaces = result.places.slice(0, 3);
      console.log("🚀 About to save history");

      recordHistory({
        userId: req.user ? req.user.id : null, // anonymous supported
        // userId,
        moods,
        recommendedPlaces: topPlaces,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
}
