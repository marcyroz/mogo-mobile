import { Stack } from 'expo-router';

export default function PrivateLayout() {
  // Não é necessário mapeamento das screens pois o Expo Router faz isso automaticamente
  return <Stack screenOptions={{ headerShown: false }} />;
}
