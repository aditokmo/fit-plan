import React from "react";
import { Text, View } from "react-native";

export default function Topbar() {
    return (
        <View className="relative flex-row justify-between items-center gap-2">
            <View className="absolute top-4 right-4 bg-green-500 px-2 py-1 rounded-full">
                <Text className="text-white font-semibold text-sm">🔥 3 days</Text>
            </View>

            <Text className="text-xl text-gray-600">
                Welcome back,{"\n"}
                <Text className="font-bold text-2xl text-black">Adi Tokmo</Text>
            </Text>
        </View>
    );
}
