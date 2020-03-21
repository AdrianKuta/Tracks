import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";
import { useState, useEffect } from "react";

export default (shouldTrack, callback) => {
  const [permissionStatus, setPermissionStatus] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    if (subscriber) {
      subscriber.remove();
    }
    const { status } = await requestPermissionsAsync();
    setPermissionStatus(status);
    const sub = await watchPositionAsync(
      {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      },
      callback
    );
    setSubscriber(sub);
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [permissionStatus];
};
