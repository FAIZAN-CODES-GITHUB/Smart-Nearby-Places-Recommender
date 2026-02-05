import moods from "./moods.js"


export function interpretMoods(selectedMoods) {
    if ( !selectedMoods || selectedMoods.length === 0){
        throw new error ("Mood Selection is required")
    }


    const uniqueMoods = [...new Set(selectedMoods)];

    for ( const mood of uniqueMoods){
        if ( !moods[mood]){
            throw new error (`Unsupported Mood :${mood}`)
        }
    }
    if (uniqueMoods.length === 1){
        const moodData = moods[uniqueMoods[0]];
        return {
            meaning : moodData.meaning ,
            include : moodData.include ,
            exclude : moodData.exclude ,
        }
    }
    let include = [];
    let exclude = [];
    for ( const mood of uniqueMoods) {
        include = [...new Set(moods[mood].include)]
        exclude = [...new Set(moods[mood].exclude)]
    }

    return {
        meaning : "Combine intent based on selected Moods",
        include : [...new Set(include)] ,
        exclude : [...new Set(exclude)] ,
    }
}