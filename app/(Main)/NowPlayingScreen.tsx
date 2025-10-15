import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import React, { useState, useEffect, useRef } from 'react';

export default function NowPlayingScreen() {
  const sound = useRef(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadSound = async () => {
      try {
        await sound.current.loadAsync(require('../../components/Music/arroz.mp3'));
      } catch (error) {
        console.log('Error loading sound', error);
      }
    };
    loadSound();

    return () => {
      sound.current.unloadAsync();
    };
  }, []);

  const togglePlayback = async () => {
    try {
        const status = await sound.current.getStatusAsync();
        if (status.isLoaded) {
            if (isPlaying) {
                await sound.current.pauseAsync();
            } else {
                await sound.current.playAsync();
            }
            setIsPlaying(!isPlaying);
        }
    } catch (error) {
        console.log('Error toggling playback', error);
    }
  };

  return (
    <LinearGradient
        colors={['#4c25b0', '#121212']}
        className="flex-1"
      >
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-between p-4">
            {/* Header */}
            <View className="w-full flex-row justify-between items-center">
                <TouchableOpacity>
                    <AntDesign name="down" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white font-bold">Now Playing</Text>
                <TouchableOpacity>
                    <Feather name="more-vertical" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Album Art */}
            <Image 
                source={{ uri: 'https://picsum.photos/seed/nowplaying/800' }} 
                className="w-80 h-80 rounded-lg shadow-lg"
                resizeMode="cover"
            />

            {/* Song Info */}
            <View className="w-full">
                <Text className="text-white text-2xl font-bold">Arroz</Text>
                <Text className="text-gray-400 text-lg">Artista Desconocido</Text>
            </View>

            {/* Progress Bar */}
            <View className="w-full">
                <View className="h-1 bg-gray-600 rounded-full">
                    <View className="h-1 bg-white rounded-full w-1/2"></View>
                </View>
                <View className="flex-row justify-between mt-1">
                    <Text className="text-gray-400 text-xs">0:00</Text>
                    <Text className="text-gray-400 text-xs">---</Text>
                </View>
            </View>

            {/* Controls */}
            <View className="w-full flex-row justify-around items-center">
                <TouchableOpacity>
                    <FontAwesome name="random" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="stepbackward" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white rounded-full p-4" onPress={togglePlayback}>
                    <FontAwesome name={isPlaying ? "pause" : "play"} size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="stepforward" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="repeat" size={24} color="white" />
                </TouchableOpacity>
            </View>

             {/* Devices and Lyrics */}
             <View className="w-full flex-row justify-between items-center">
                <TouchableOpacity>
                    <Feather name="speaker" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="mic" size={20} color="white" />
                </TouchableOpacity>
            </View>

        </View>
        </SafeAreaView>
    </LinearGradient>
  );
}
