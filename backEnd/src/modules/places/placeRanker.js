

export function rankPlaces(places , intent) {
      if ( !places || places.length ===0 ){
        return [];
      }

      return[...places].sort((placeA, placeB) => {

  const placeAMatchesMood = intent.include.includes(placeA.category);
  const placeBMatchesMood = intent.include.includes(placeB.category);

  if (placeAMatchesMood !== placeBMatchesMood) {
    return placeAMatchesMood ? -1 : 1;
  }

  if (placeA.distance !== placeB.distance) {
    return placeA.distance - placeB.distance;
  }

  return (placeB.rating || 0) - (placeA.rating || 0);
});
      
}