import { View } from "react-native";
import { useRouter } from 'expo-router';
import { CustomText } from '../components/ui/CustomText';
import { CustomButton } from '../components/CustomButton';
import * as Haptics from 'expo-haptics';

import "../global.css";
export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomButton title="Ir a Dashboard" onPress={async () => { await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); router.push('/DashBoardScreen'); }} />
    </View>
  );
}
