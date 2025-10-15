import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const playlist = [
  {
    title: 'Remember Me',
    artist: 'Artista Desconocido',
    image: 'https://picsum.photos/seed/nowplaying/800',
    uri: require('../../components/Music/Remember Me.mp3'),
  },
  {
    title: 'SoundHelix Song 1',
    artist: 'SoundHelix',
    image: 'https://picsum.photos/seed/soundhelix/800',
    uri: { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  },
  {
    title: 'The Road Home',
    artist: 'Alexander Nakarada',
    image: 'https://picsum.photos/seed/roadhome/800',
    uri: { uri: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Road-Home-by-Alexander-Nakarada.mp3' },
  },
  {
    title: 'Adventure',
    artist: 'Alexander Nakarada',
    image: 'https://picsum.photos/seed/adventure/800',
    uri: { uri: 'https://www.chosic.com/wp-content/uploads/2021/08/adventure-by-alexander-nakarada.mp3' },
  },
];

const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default function NowPlayingScreen() {
  const sound = useRef(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playbackStatus, setPlaybackStatus] = useState(null);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    loadSound(playlist[currentSongIndex].uri);
  }, [currentSongIndex]);

  const loadSound = async (uri) => {
    await sound.current.unloadAsync();
    try {
      await sound.current.loadAsync(uri);
      sound.current.setOnPlaybackStatusUpdate(setPlaybackStatus);
    } catch (error) {
      console.log('Error loading sound', error);
    }
  };
  
  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(false);
  };

  const playPrevious = () => {
    const prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(false);
  };


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

  const progress = playbackStatus?.isLoaded ? (playbackStatus.positionMillis / playbackStatus.durationMillis) * 100 : 0;

  return (
    <LinearGradient
        colors={['#4c25b0', '#121212']}
        className="flex-1"
      >
      <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right }}>
        <View className="flex-1 items-center justify-between p-4">
            <View className="w-full flex-row justify-between items-center">
                <TouchableOpacity onPress={() => router.back()}>
                    <AntDesign name="down" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white font-bold">Reproduciendo ahora</Text>
                <TouchableOpacity>
                    <Feather name="more-vertical" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <Image 
                source={{ uri: playlist[currentSongIndex].image }} 
                className="w-80 h-80 rounded-lg shadow-lg"
                resizeMode="cover"
            />

            <View className="w-full">
                <Text className="text-white text-2xl font-bold">{playlist[currentSongIndex].title}</Text>
                <Text className="text-gray-400 text-lg">{playlist[currentSongIndex].artist}</Text>
            </View>

            <View className="w-full">
                <View className="h-1 bg-gray-600 rounded-full">
                    <View style={{ height: '100%', backgroundColor: 'white', borderRadius: 999, width: `${progress}%` }}></View>
                </View>
                <View className="flex-row justify-between mt-1">
                    <Text className="text-gray-400 text-xs">{playbackStatus?.isLoaded ? formatTime(playbackStatus.positionMillis) : '0:00'}</Text>
                    <Text className="text-gray-400 text-xs">{playbackStatus?.isLoaded ? formatTime(playbackStatus.durationMillis) : '--:--'}</Text>
                </View>
            </View>

            <View className="w-full flex-row justify-around items-center">
                <TouchableOpacity>
                    <FontAwesome name="random" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={playPrevious}>
                    <AntDesign name="arrow-left" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white rounded-full p-4" onPress={togglePlayback}>
                    <FontAwesome name={isPlaying ? "pause" : "play"} size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={playNext}>
                    <AntDesign name="arrow-right" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="repeat" size={24} color="white" />
                </TouchableOpacity>
            </View>

             <View className="w-full flex-row justify-between items-center">
                <TouchableOpacity>
                    <Feather name="speaker" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="mic" size={20} color="white" />
                </TouchableOpacity>
            </View>

        </View>
        </View>
    </LinearGradient>
  );
}
