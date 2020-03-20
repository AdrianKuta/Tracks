//import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const [permissionStatus, setPermissionStatus] = useState(null);
  const { addLocation } = useContext(LocationContext);

  const startWatching = async () => {
    const { status } = await requestPermissionsAsync();
    setPermissionStatus(status);
    await watchPositionAsync(
      {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      },
      location => {
        addLocation(location);
      }
    );
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h3>Create a Track</Text>
      <Map />
      {permissionStatus === "denied" ? (
        <Text>Please enable location services</Text>
      ) : null}
      <Text>Elo</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
