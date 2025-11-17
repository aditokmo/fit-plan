import { exercises } from "@/constants";
import ExerciseCard from "@/screens/Exercise/components/ExerciseCard";
import { router } from "expo-router";
import { useState } from "react";
import { Text, ScrollView, View, Alert } from "react-native";


export default function Exercise() {
    const select = false;
    const [selectedExercises, setSelectedExercises] = useState<number[]>([]);

    const handleSelect = (exerciseId: number) => {
        if (select) {
            setSelectedExercises((prev) => prev.includes(exerciseId) ? prev.filter((id) => id !== exerciseId) : [...prev, exerciseId]);
        } else {
            router.push(`/exercise/${exercises.find((ex) => ex.id === exerciseId)?.slug}`);
        }
    }

    return (
        <View className="flex-1 bg-gray-50">
            <View className="bg-white px-6 pt-20 pb-6">
                <Text className="text-2xl font-bold">Exercise Library</Text>
                <Text className="text-gray-600">Discover and learn new exercises</Text>
            </View>

            <ScrollView className="flex-1 px-6 pt-6">
                <View className="gap-5 pb-36">
                    {exercises.map((exercise) => (
                        <ExerciseCard
                            key={exercise.id}
                            exerciseId={exercise.id}
                            exerciseImage={exercise.image}
                            exerciseName={exercise.name}
                            exerciseDesc={exercise.desc}
                            isSelected={selectedExercises.includes(exercise.id)}
                            handleSelect={handleSelect}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
