import { useState } from "react";
import { Text, View, Image, ImageSourcePropType, Touchable, TouchableOpacity, Alert } from "react-native";

interface ExerciseProps {
    exerciseId: number;
    exerciseName: string;
    exerciseDesc: string;
    exerciseImage?: ImageSourcePropType;
    handleSelect: (id: number) => void;
    isSelected: boolean;
}

export default function ExerciseCard({ exerciseId, exerciseImage, exerciseName, exerciseDesc, isSelected, handleSelect }: ExerciseProps) {
    return (
        <TouchableOpacity
            onPress={() => handleSelect(exerciseId)}
            className={`flex-row items-center gap-4 rounded-md px-4 py-8 shadow-sm border
        ${isSelected ? "bg-blue-100 border-blue-500" : "bg-white border-gray-200"}`}
        >
            <Image source={exerciseImage} className="w-20 h-20 rounded-md" />
            <View className="flex-1">
                <Text className="font-bold text-lg">{exerciseName}</Text>
                <Text className="text-gray-600" numberOfLines={3}>
                    {exerciseDesc}
                </Text>
            </View>
        </TouchableOpacity>
    );
}