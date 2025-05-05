import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
