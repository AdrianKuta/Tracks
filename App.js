import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TrackListFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator shifting={true}>
          <Tab.Screen
            name="trackListFlow"
            component={TrackListFlow}
            someProps={true}
            options={{
              tabBarLabel: "Track List",
              tabBarColor: "#00838f",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="format-list-bulleted"
                  color={color}
                  size={26}
                />
              )
            }}
          />
          <Tab.Screen
            name="TrackCreate"
            component={TrackCreateScreen}
            options={{
              tabBarLabel: "Create Track",
              tabBarColor: "#1976d2",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="add-location" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarColor: "#00796b",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="account-circle" color={color} size={26} />
              )
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              header: () => null
            }}
          />
          <Stack.Screen name="Signin" component={SigninScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
