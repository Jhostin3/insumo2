import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CustomButton } from '../components/CustomButton';

import "../global.css";

export default function Index() {
  const router = useRouter();

  const handlePress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/DashBoardScreen');
  };

  return (
    <View className="flex-1 justify-center items-center bg-[#121212] px-8">
      <Entypo name="spotify" size={100} color="#1DB954" className="mb-8" />
      
      <Text className="text-white text-center text-xl font-bold mb-8">
        Millones de canciones Gratis en Spotify.
      </Text>

      {/* Botón principal */}
      <CustomButton
        title="Regístrate gratis"
        onPress={handlePress}
        className="bg-[#1DB954] w-80 mb-4"
        textColor="#FFFFFF"
        variant="second"
      />

      {/* Botón Google */}
      <CustomButton
        title="Continuar con Google"
        onPress={handlePress}
        className="bg-[#121212] w-80 mb-4 flex-row justify-center items-center rounded-full border border-white"
        additionalStyle={{ paddingVertical: 16 }}
        textColor="#FFFFFF"
      >
        <Image source={{ uri: 'http://pngimg.com/uploads/google/google_PNG19635.png' }} style={{ width: 24, height: 24, marginRight: 10 }} />
      </CustomButton>

      {/* Botón Facebook */}
      <CustomButton
        title="Continuar con Facebook"
        onPress={handlePress}
        className="bg-[#121212] w-80 mb-4 flex-row justify-center items-center rounded-full border border-white"
        additionalStyle={{ paddingVertical: 16 }}
        textColor="#FFFFFF"
      >
        <Entypo name="facebook" size={24} color="#1877F2" style={{ marginRight: 10 }} />
      </CustomButton>

      {/* Botón Apple */}
      <CustomButton
        title="Continuar con Apple"
        onPress={handlePress}
        className="bg-[#121212] w-80 mb-4 flex-row justify-center items-center rounded-full border border-white"
        additionalStyle={{ paddingVertical: 16 }}
        textColor="#FFFFFF"
      >
        <AntDesign name="apple" size={24} color="#FFFFFF" style={{ marginRight: 10 }} />
      </CustomButton>

      {/* Iniciar sesión */}
      <TouchableOpacity onPress={handlePress} className="mt-4">
        <Text className="text-white underline">Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
