import { StatCircle } from "@/components/StatCircle";
import React from "react";
import { Text, View } from "react-native";

export default function TodayGoalsCard() {
    return (
        <View className="gap-4 bg-white p-4 my-6 rounded-md shadow-sm">
            <Text className="text-base font-medium">Today goals</Text>

            <View className="flex-row justify-between pt-4">
                <View className="items-center">
                    <StatCircle
                        size={60}
                        strokeWidth={6}
                        progress={75}
                        icon={require('../../../assets/icons/workout.png')}
                    />
                    <Text className="text-xl font-bold mt-2">Workout</Text>
                    <Text>Upper body</Text>
                </View>

                <View className="items-center">
                    <StatCircle
                        size={60}
                        strokeWidth={6}
                        progress={75}
                        icon={require('../../../assets/icons/meal.png')}
                    />
                    <Text className="text-xl font-bold mt-2">Nutrition</Text>
                    <Text>3/5 meals</Text>
                </View>

                <View className="items-center">
                    <StatCircle
                        size={60}
                        strokeWidth={6}
                        progress={75}
                        icon={require('../../../assets/icons/bottle-water.png')}
                    />
                    <Text className="text-xl font-bold mt-2">Hydration</Text>
                    <Text>6/8 cups</Text>
                </View>
            </View>
        </View>
    );
}
