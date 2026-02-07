import moods from "../modules/moods/moods.js";
import History from "./history.model.js";

// const historyRecords = [];

export async function recordHistory(historyData) {
  try {
   const history = new History(historyData);
   await history.save();

    // console.log("History recorded ", historyRecord);
  } catch (error) {
    // Should be silent 
  }
}


// Fetch history for a logged-in user

export async function getUserHistory(userId) {
  if(!userId){
    throw new Error ("UserId is required to fetch history")
  }
  try {
    const historyList = await History.find({userId}).sort({createdAt : -1});

    return historyList;
  } catch (error) {
    throw new Error("Failed to fetch user History");
  }
}
