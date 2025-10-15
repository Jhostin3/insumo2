import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function MainLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#1DB954',
      tabBarStyle: {
        backgroundColor: '#000000',
        borderTopWidth: 0,
      },
    }}>
      <Tabs.Screen
        name="DashBoardScreen"
        options={{
          headerShown: false,
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="NowPlayingScreen"
        options={{
          headerShown: false,
          tabBarLabel: "Reproduciendo",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="play-arrow" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="SettingsScreen"
        options={{
          headerShown: false,
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
