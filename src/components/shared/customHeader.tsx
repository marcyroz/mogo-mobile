import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../ui/text';

interface CustomHeaderProps {
    title?: string;
    showBackButton?: boolean;
}

export default function CustomHeader({
    title,
    showBackButton = true
}: CustomHeaderProps) {
    const router = useRouter();

    return (
        <SafeAreaView edges={['top']} className="bg-background">
            <View className="flex-row items-center px-5 py-4">
                {showBackButton && (
                    <Pressable onPress={() => router.back()} className="mr-4">
                        <ArrowLeft size={24} color="#000" />
                    </Pressable>
                )}
                {title && (
                    <Text className="text-lg font-semibold">{title}</Text>
                )}
            </View>
        </SafeAreaView>
    );
}