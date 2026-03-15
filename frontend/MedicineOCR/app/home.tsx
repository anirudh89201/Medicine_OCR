import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Screen</Text>
      {/* Navigate to the Profile tab */}
      <Button
        title="Go to Profile Tab"
        onPress={() => router.push("/(tabs)/profile")}
      />
    </View>
  );
}