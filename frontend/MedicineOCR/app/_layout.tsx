import { View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AppLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        {/* Navigate to a tab screen, not the layout */}
        <Stack.Screen name="(tabs)/profile" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </View>
  );
}