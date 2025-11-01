import HomeBottomSheet from "@/src/components/home/home-bottom-sheet";
import SearchBar from "@/src/components/home/search-bar";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView className="flex-1">
            <SearchBar />
            <HomeBottomSheet />
        </SafeAreaView>
    )
}