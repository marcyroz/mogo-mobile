import CustomHeader from '@/src/components/shared/customHeader';
import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="register/index"
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
      />
      <Stack.Screen
        name="register/questionary/index"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}