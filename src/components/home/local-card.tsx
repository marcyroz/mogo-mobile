import { CornerUpRight } from "lucide-react-native"
import React from 'react'
import { Image, View } from "react-native"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Text } from "../ui/text"
import DropdownCardPopover from "./local-card-dropdown"

interface LocalCardProps {
    name: string;
    image: any;
    favorite: boolean;
}
export default function LocalCard({ name, image, favorite }: LocalCardProps) {
    return (
        <Card className="w-40 h-56 p-2 gap-2">
            <Image
                source={image}
                className="w-full h-28 rounded-md"
            />
            <Text>{name}</Text>
            <View className="flex-row justify-between items-center">
                <Button >
                    <CornerUpRight color="white" />
                    <Text>Iniciar</Text>
                </Button>
                <DropdownCardPopover favorite={favorite} />
            </View>
        </Card>
    )
}