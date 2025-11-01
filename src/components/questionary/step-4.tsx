import Mogo from "@/assets/questionary/mogo-4.svg";
import { useRouter } from "expo-router";
import React, { useEffect } from 'react';
import { Text } from 'react-native';

export default function Step4() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/(public)/home');
        }, 3000);
    }, []);

    return (
        <>
            <Text className="text-3xl font-bold text-center mb-8">Otimizando sua experiência...</Text>
            <Mogo width={250} height={250} />
        </>
    )
}