import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Spacer>
        <Button title="Log out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default AccountScreen;
