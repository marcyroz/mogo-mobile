import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeLayout() {
    return (
        <GestureHandlerRootView>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
        </GestureHandlerRootView>
    )
}   