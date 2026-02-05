export function filterPlaces(places, intent) {
  if (!places || places.length === 0) {
    return [];
  }

  return places.filter((place) => {
    //Place must be open
    if (!place.isOpen) {
      return false;
    }

    //Exclude unwanted categories
    if (intent.exclude.includes(place.category)) {
      return false;
    }

    //Valid place
    return true;
  });
}
