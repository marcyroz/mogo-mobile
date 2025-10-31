import { View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/src/components/ui/text';
import Maps from '@/src/components/maps/maps';

export default function HomePage() {
  return (
    <SafeAreaView className="mx-2 my-2 flex-1 bg-white ">
      <View className="h-full w-full items-center justify-start">
        <Text>Home Page</Text>
        <Maps />
        <Text>Mapa aqui</Text>
      </View>
    </SafeAreaView>
  );
}
