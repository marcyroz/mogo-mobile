import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';

export default function Maps() {
  return (
    <View className="flex-1">
      <MapView className="h-full w-full" />
    </View>
  );
}
