import { Menu, Mic } from "lucide-react-native"
import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function SearchBar() {
    return (
        <View className="relative p-4">
            <Button variant="ghost" className="absolute bottom-6 z-10 left-6 rounded-full size-auto p-3">
                <Menu />
            </Button>
            <Input className="pl-14 rounded-full py-5 h-auto" placeholder="Aonde vamos hoje?" />
            <Button variant="ghost" className="absolute bottom-6 z-10 right-20 rounded-full size-auto p-3">
                <Mic />
            </Button>
            <Pressable className="absolute bottom-6 z-10 right-6 rounded-full size-auto">
                <Image
                    source={require('@/assets/home/default-profile.png')}
                    className="size-11 rounded-full"
                />
            </Pressable>
        </View>
    )
}