import mongoose from "mongoose";

const historySchema = new  mongoose.schema(
    {
        userId : {
            type : string,
            default : null
        },
        
        moods :{
            type : [String],
            required : true
        },
        
        recommendPlaces : {
            type : Array,
            required : true 
        }
    },{
        timestamps : true,
    }
    
)

export const History = mongoose.model("History", historySchema);