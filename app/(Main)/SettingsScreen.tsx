import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#121212',
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }}>
      <ScrollView className="flex-1">
        <View className="p-4 flex-row items-center">
            <Image 
                source={{ uri: 'https://picsum.photos/seed/profile/200' }} 
                className="w-16 h-16 rounded-full"
                resizeMode="cover"
            />
            <View className="ml-4">
                <Text className="text-white text-2xl font-bold">Jhostin Quijije</Text>
                <TouchableOpacity>
                    <Text className="text-gray-400">Ver perfil</Text>
                </TouchableOpacity>
            </View>
        </View>

        <SettingsItem icon="user" title="Cuenta" subtitle="Privacidad, seguridad, número" />
        <SettingsItem icon="save" title="Ahorro de datos" subtitle="Calidad de audio" />
        <SettingsItem icon="play-circle" title="Reproducción" subtitle="Sin pausas, normalización" />
        <SettingsItem icon="smartphone" title="Dispositivos" subtitle="Conectar a un dispositivo" />
        <SettingsItem icon="bell" title="Notificaciones" subtitle="Música, podcasts y programas" />
        <SettingsItem icon="globe" title="Idioma" subtitle="Español" />
        <SettingsItem icon="info" title="Acerca de" subtitle="Términos, política de privacidad" />

      </ScrollView>
    </View>
  );
}
