import React from "react";
import { Image, Text, View } from "react-native";

export default function QuickActionCard() {
    return (
        <View>
            <Text className="text-xl font-medium pt-4">Quick actions</Text>

            <View className="flex-row items-center justify-between bg-white px-4 py-6 my-6 rounded-lg bg-[#4f8fe3] shadow">
                <View className="flex-row gap-4 items-center">
                    <Image source={require('../../../assets/icons/play-btn.png')} className="bg-[#5f9eef] rounded-full p-2 w-12 h-12" />
                    <View className="text-white">
                        <Text className="text-white text-xl font-bold">Start Workout</Text>
                        <Text className="text-gray-200 text-sm">Begin your training session</Text>
                    </View>
                </View>
                <Image source={require('../../../assets/icons/arrow-right.png')} className="w-8 h-8" />
            </View>

            <View className="flex-row gap-4 w-full justify-center px-2">
                <View className="flex-row items-center justify-between px-4 py-6 rounded-lg bg-white shadow-sm w-1/2">
                    <View className="gap-4">
                        <Image source={require('../../../assets/icons/workout-history-list.png')} className="w-8 h-8" />
                        <View className="text-white">
                            <Text className="text-xl font-bold">Workout History</Text>
                            <Text className="text-gray-500 text-sm">Track your progress</Text>
                        </View>
                    </View>
                    <Image source={require('../../../assets/icons/arrow-right.png')} className="w-8 h-8" />
                </View>

                <View className="flex-row items-center justify-between px-4 py-6 rounded-lg bg-white shadow-sm w-1/2">
                    <View className="gap-4">
                        <Image source={require('../../../assets/icons/streak-icon.png')} className="w-8 h-8" />
                        <View className="text-white">
                            <Text className="text-xl font-bold">Planner</Text>
                            <Text className="text-gray-500 text-sm">Plan your goals</Text>
                        </View>
                    </View>
                    <Image source={require('../../../assets/icons/arrow-right.png')} className="w-8 h-8" />
                </View>
            </View>
        </View>
    );
}
