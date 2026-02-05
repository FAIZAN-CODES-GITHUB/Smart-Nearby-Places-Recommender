

const moods = {
    work : {
        meaning : "User wants a calm place to focus and spend some time working",
        include : ["cafe", "library", "coworking_space", "quiet_park"],
        exclude : ["club", "bar", "loud_restaurant"]
    },

    
  quick_bite: {
    meaning: "User wants food quickly with minimal waiting time",
    include: ["fast_food", "bakery", "small_food_joint"],
    exclude: ["fine_dining", "large_restaurant", "hotel"]
  },

  alone: {
    meaning: "User wants a comfortable place with people around but low pressure",
    include: ["cafe", "bookstore", "public_park"],
    exclude: ["club", "romantic_restaurant", "crowded_event"]
  },

  date: {
    meaning: "User wants a pleasant and comfortable place suitable for a date",
    include: ["cafe", "restaurant", "quiet_lounge"],
    exclude: ["fast_food", "street_food", "noisy_place"]
  },

  hangout: {
    meaning: "User wants a lively place to spend time with friends",
    include: ["cafe", "food_court", "casual_restaurant"],
    exclude: ["library", "quiet_workspace"]
  },

  sad: {
    meaning: "User wants a comforting and peaceful environment",
    include: ["cafe", "park", "bookstore"],
    exclude: ["club", "crowded_event", "loud_place"]
  },

  happy: {
    meaning: "User wants an enjoyable and positive environment",
    include: ["cafe", "restaurant", "public_place"],
    exclude: ["isolated_place"]
  },
  calm : {
    meaning : "User wants an peacefull and quite environment",
    include : ["cafe , library"],
    exclude : ["clubs" , "public_places"]
  }
}

export default moods