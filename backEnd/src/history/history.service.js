import moods from "../modules/moods/moods.js";

const historyRecords = [];

export function recordHistory(historyData) {
  try {
    const historyRecord = {
      userId: historyData.userId || null,
      moods: historyData.moods,
      recommendedPlaces: historyData.recommendedPlaces,
      context: historyData.context || {},
      createdAt: new Date(),
    };

    console.log("History recorded ", historyRecord);
  } catch (error) {
    console.error("Failed to record history", error.message);
  }
}

export function getUserHistory(userId) {
  return historyRecords.filter((record) => record.userId === userId);
}
