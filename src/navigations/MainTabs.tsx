import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "~/features/main/screens/home/HomeScreen";
import CartScreen from "~/features/main/screens/cart/CartScreen";
import ProfileScreen from "~/features/main/screens/profile/ProfileScreen";
import SettingsScreen from "~/features/main/screens/setting/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
