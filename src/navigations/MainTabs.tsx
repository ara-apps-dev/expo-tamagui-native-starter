import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "~/features/main/screens/home/HomeScreen";
import CartScreen from "~/features/main/screens/cart/CartScreen";
import ProfileScreen from "~/features/main/screens/profile/ProfileScreen";
import SettingsScreen from "~/features/main/screens/setting/SettingsScreen";
import { getTabBarIcon } from "~/constants";
import { PlatformPressable } from "@react-navigation/elements";
import { useTheme } from "tamagui";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.primary.val,
        tabBarInactiveTintColor: theme.labelColor.val,
        tabBarIcon: ({ color, size, focused }) =>
          getTabBarIcon(route.name, focused, color, size),
        tabBarButton: (props) => (
          <PlatformPressable
            {...props}
            android_ripple={{ color: "transparent" }}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
