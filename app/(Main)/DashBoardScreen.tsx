import { View } from "react-native";
import { useRouter } from 'expo-router';
import { CustomText } from '../../components/ui/CustomText';
import { CustomButton } from '../../components/CustomButton';
import * as Haptics from 'expo-haptics';

export default function DashBoardScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomButton title="Regresar" onPress={() => router.back()} />
    </View>
  );
}
