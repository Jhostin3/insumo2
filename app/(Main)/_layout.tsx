import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="DashBoardScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
