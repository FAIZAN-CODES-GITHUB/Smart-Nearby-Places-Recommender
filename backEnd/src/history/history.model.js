import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
    {
        userId : {
            type : String,
            default : null
        },
        
        moods :{
            type : [String],
            required : true
        },
        
       recommendedPlaces : {
            type : Array,
            required : true 
        }
    },{
        timestamps : true,
    }
    
)

const History = mongoose.model("History", historySchema);
export default History;