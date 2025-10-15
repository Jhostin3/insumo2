import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather, FontAwesome } from '@expo/vector-icons';

const SettingsItem = ({ icon, title, subtitle }) => (
    <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-800">
        <View className="flex-row items-center">
            <Feather name={icon} size={24} color="white" />
            <View className="ml-4">
                <Text className="text-white text-lg">{title}</Text>
                {subtitle && <Text className="text-gray-400 text-sm">{subtitle}</Text>}
            </View>
        </View>
        <Feather name="chevron-right" size={24} color="gray" />
    </TouchableOpacity>
)

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-[#121212]">
      <ScrollView className="flex-1">
        {/* User Profile Section */}
        <View className="p-4 flex-row items-center">
            <Image 
                source={{ uri: 'https://picsum.photos/seed/profile/200' }} 
                className="w-16 h-16 rounded-full"
                resizeMode="cover"
            />
            <View className="ml-4">
                <Text className="text-white text-2xl font-bold">Jhostin Quijije</Text>
                <TouchableOpacity>
                    <Text className="text-gray-400">View Profile</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* Settings List */}
        <SettingsItem icon="user" title="Account" subtitle="Privacy, security, number" />
        <SettingsItem icon="save" title="Data Saver" subtitle="Audio quality" />
        <SettingsItem icon="play-circle" title="Playback" subtitle="Gapless, normalization" />
        <SettingsItem icon="smartphone" title="Devices" subtitle="Connect to a device" />
        <SettingsItem icon="bell" title="Notifications" subtitle="Music, podcasts & shows" />
        <SettingsItem icon="globe" title="Language" subtitle="English" />
        <SettingsItem icon="info" title="About" subtitle="Terms, privacy policy" />

      </ScrollView>
    </View>
  );
}
