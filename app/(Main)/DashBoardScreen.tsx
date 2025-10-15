import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

// Component for grid items like "Liked Songs"
const GridItem = ({ item }) => (
  <TouchableOpacity className="flex-row items-center bg-gray-800 rounded-md overflow-hidden h-16" style={{ width: '48%' }}>
    <Image source={{ uri: item.image }} className="w-16 h-16" resizeMode="cover" />
    <Text className="text-white font-bold ml-3 flex-shrink">{item.name}</Text>
  </TouchableOpacity>
);

// Component for album cards in the horizontal scroll view
const AlbumCard = ({ album }) => (
    <TouchableOpacity className="mr-4 w-40">
        <Image source={{ uri: album.image }} className="w-40 h-40 rounded-md" resizeMode="cover" />
        <Text className="text-white font-bold mt-2" numberOfLines={1}>{album.title}</Text>
        <Text className="text-gray-400 text-sm mt-1" numberOfLines={1}>Album • {album.artist}</Text>
    </TouchableOpacity>
)

export default function DashBoardScreen() {
    const gridData = [
        { name: 'Liked Songs', image: 'https://picsum.photos/seed/liked/200' },
        { name: 'Rock Mix', image: 'https://picsum.photos/seed/rock/200' },
        { name: 'Popcorn', image: 'https://picsum.photos/seed/popcorn/200' },
        { name: 'Daily Mix 2', image: 'https://picsum.photos/seed/daily/200' },
    ];

    const trendingAlbums = [
        { title: 'Abbey Road', artist: 'The Beatles', image: 'https://picsum.photos/seed/beatles/400' },
        { title: 'The Dark Side of the Moon', artist: 'Pink Floyd', image: 'https://picsum.photos/seed/pinkfloyd/400' },
        { title: 'Thriller', artist: 'Michael Jackson', image: 'https://picsum.photos/seed/jackson/400' },
        { title: 'Back in Black', artist: 'AC/DC', image: 'https://picsum.photos/seed/acdc/400' },
    ];
    
    const recentlyPlayed = [
        { name: 'Queen', image: 'https://picsum.photos/seed/queen/300' },
        { name: 'The Beatles', image: 'https://picsum.photos/seed/beatles2/300' },
        { name: 'AC/DC', image: 'https://picsum.photos/seed/acdc2/300' },
    ];

  return (
    <View className="flex-1 bg-[#121212]">
      <LinearGradient
        colors={['#4c25b0', '#121212']}
        className="absolute top-0 left-0 right-0 h-96"
      />
      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ padding: 16, paddingBottom: 16 }}
      >
        {/* Header */}
        <View className="flex-row justify-between items-center mt-8 mb-4">
            <Text className="text-white text-3xl font-bold">Good afternoon</Text>
            <View className="flex-row items-center space-x-5">
                <TouchableOpacity>
                    <Feather name="bell" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="clock" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="settings" size={24} color="white" />
                </TouchableOpacity>
                <Link href="/asdasdasd" asChild>
                  <TouchableOpacity>
                      <Feather name="alert-triangle" size={24} color="white" />
                  </TouchableOpacity>
                </Link>
            </View>
        </View>

        {/* Playlist Grid */}
        <View className="flex-row flex-wrap justify-between gap-y-2 mb-8">
            {gridData.map(item => <GridItem key={item.name} item={item} />)}
        </View>

        {/* Recently Played */}
        <View className="mb-8">
            <Text className="text-white text-2xl font-bold mb-4">Recently Played</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recentlyPlayed.map(item => (
                    <TouchableOpacity key={item.name} className="mr-4 w-32 items-center">
                        <Image source={{ uri: item.image }} className="w-32 h-32 rounded-full" resizeMode="cover"/>
                        <Text className="text-white font-bold mt-2 text-center" numberOfLines={2}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>

        {/* Trending Albums Section */}
        <View>
            <Text className="text-white text-2xl font-bold mb-4">Trending albums for you</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {trendingAlbums.map(album => <AlbumCard key={album.title} album={album} />)}
            </ScrollView>
        </View>
        
      </ScrollView>

    </View>
  );
}
