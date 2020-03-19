import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { Text } from "react-native-elements";
import { withNavigation } from "@react-navigation/compat";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
      <Spacer>
        <Text style={styles.linkStyle}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkStyle: {
    color: "blue"
  }
});

export default withNavigation(NavLink);
