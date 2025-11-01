import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Bell, BriefcaseBusiness, Heart, House } from "lucide-react-native";
import React, { useMemo } from 'react';
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import LocalCard from "./local-card";

const options = [
    { title: "Casa", icon: House },
    { title: "Trabalho", icon: BriefcaseBusiness },
    { title: "Favoritos", icon: Heart, quantity: 5 },
]

const locations = [
    { name: "Rua Silvia Dias", image: require('@/assets/home/default-image.png'), favorite: true },
    { name: "Avenida Paulista", image: require('@/assets/home/default-image.png'), favorite: false },
    { name: "Praça da Sé", image: require('@/assets/home/default-image.png'), favorite: false },
]
export default function HomeBottomSheet() {

    const snapPoints = useMemo(() => ['14%', '60%'], []);

    return (
        <BottomSheet
            snapPoints={snapPoints}
            index={1}
            backgroundStyle={{ boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.2)', borderRadius: 30 }}
            handleStyle={{ paddingVertical: 20 }}
            handleIndicatorStyle={{ backgroundColor: '#C4C4C4', width: 68, borderRadius: 4, height: 5 }}
        >
            <BottomSheetView className="flex-1 p-4 gap-4">
                <View className="flex-row justify-between items-center">
                    <Text className="text-2xl font-bold">Rua Silvia Dias</Text>
                    <Button variant="ghost" className="rounded-full size-auto p-3">
                        <Bell />
                    </Button>
                </View>
                <View className="gap-2">
                    <Text className="text-xl font-bold">Itens salvos</Text>
                    <View>
                        {options.map((option) => (
                            <Button key={option.title} variant="ghost" className="justify-between p-0 h-auto">
                                <View className="flex-row items-center gap-2">
                                    <option.icon />
                                    <Text className="font-normal">{option.title}</Text>
                                </View>
                                {option.quantity && (
                                    <Text className="text-muted-foreground font-normal">
                                        {option.quantity}
                                    </Text>
                                )}
                            </Button>
                        ))}
                    </View>
                </View>
                <View className="gap-2">
                    <View className="flex-row justify-between">
                        <Text className="text-xl font-bold">Histórico</Text>
                        {locations.length > 0 && (
                            <Button variant="ghost" className="p-0 size-auto">
                                <Text className="text-destructive active:text-destructive font-normal">Limpar histórico</Text>
                            </Button>
                        )}
                    </View>
                    {locations.length === 0 ? (
                        <View className="h-56 items-center justify-center text-center">
                            <Text className="text-muted-foreground">Nada aqui...</Text>
                        </View>
                    ) : (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
                            {locations.map((location, index) => (
                                <LocalCard key={index} name={location.name} image={location.image} favorite={location.favorite} />
                            ))}
                        </ScrollView>
                    )}
                </View>
            </BottomSheetView>
        </BottomSheet>
    );
};
