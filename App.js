import "react-native-gesture-handler";
import React, { useContext } from "react";
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
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Context as AuthContext } from "./src/context/AuthContext";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const trackListFlow = () => (
  <Stack.Navigator>
    <Stack.Screen name="TrackList" component={TrackListScreen} />
    <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </Stack.Navigator>
);

const BotttomTabNavigator = (
  <Tab.Navigator shifting={true}>
    <Tab.Screen
      name="trackListFlow"
      component={trackListFlow}
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
);

const SigninNavigator = (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Signin" component={SigninScreen} />
  </Stack.Navigator>
);

const App = () => {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.token ? BotttomTabNavigator : SigninNavigator}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </AuthProvider>
  );
};
