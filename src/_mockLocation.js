import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 1584652817623 + increment,
    coords: {
      speed: 1,
      heading: 0,
      accuracy: 50,
      altitudeAccuracy: -1,
      altitude: 5,
      longitude: -122.0312186 + increment * tenMetersWithDegrees,
      latitude: 37.33233141 + increment * tenMetersWithDegrees
    }
  };
};

let counter = 0;
setInterval(() => {
  const location = getLocation(counter);
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    Location: location
  });
  counter++;
}, 1000);
