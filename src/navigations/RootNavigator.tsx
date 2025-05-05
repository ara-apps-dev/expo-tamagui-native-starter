import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAtomValue } from "jotai";
import AuthStack from "./AuthStack";
import MainTabs from "./MainTabs";
import { selectAtom } from "~/features";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const isLoggedIn = useAtomValue(selectAtom)?.isLoggedIn;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="MainApp" component={MainTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
