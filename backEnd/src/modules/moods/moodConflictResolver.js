const CONFLICTING_MOOD_PAIRS = [
    ["happy" , "sad"],
    ["angry", "calm"],
    ["hangout", "alone"],
    
]


export function hasMoodConflicts (selectedMoods){
    if(!selectedMoods || selectedMoods.length < 2){
        return false;
    }

    for ( const [moodA ,moodB] of CONFLICTING_MOOD_PAIRS){
        const hasMoodA = selectedMoods.inlcudes(moodA);
        const hasMoodB = selectedMoods.inlcudes(moodB)

        if (hasMoodA && hasMoodB){
            return true;
        }
            
    }
    return false
}