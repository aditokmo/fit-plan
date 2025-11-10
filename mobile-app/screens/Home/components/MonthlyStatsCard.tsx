import React from "react";
import { Text, View } from "react-native";

export default function MonthlyStatsCard() {
    return (
        <View className="pt-6 pb-28">
            <Text className="text-xl font-medium pt-4">Monthly Stats</Text>

            <View className="relative gap-4 bg-white p-4 my-6 rounded-md shadow-sm">
                <View className="flex-row justify-between items-center pt-4 border-b border-gray-200 pb-4">
                    <Text>Weight</Text>
                    <Text className="font-bold text-md pr-4">84.8kg</Text>
                </View>
                <View className="flex-row justify-between items-center pt-4 border-b border-gray-200 pb-4">
                    <Text>Completed Days:</Text>
                    <Text className="font-bold text-md pr-4">4 / 16</Text>
                </View>
                <View className="flex-row justify-between items-center pt-4 pb-4">
                    <Text>Gym Membership</Text>
                    <Text className="font-bold text-md pr-4">13.11.2025</Text>
                </View>
            </View>
        </View>
    );
}
