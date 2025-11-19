import { ExerciseCategory, exerciseFilters, exercises } from "@/constants";
import ExerciseCard from "@/screens/Exercise/components/ExerciseCard";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";


export default function Exercise() {
    const select = false;
    const [selectedExercises, setSelectedExercises] = useState<number[]>([]);
    const [filterExercise, setFilterExercise] = useState<ExerciseCategory | null>(null);

    const handleSelect = (exerciseId: number) => {
        if (select) {
            setSelectedExercises((prev) => prev.includes(exerciseId) ? prev.filter((id) => id !== exerciseId) : [...prev, exerciseId]);
        } else {
            router.push(`/exercise/${exercises.find((ex) => ex.id === exerciseId)?.slug}`);
        }
    }

    const handleFilter = (filterName: ExerciseCategory) => setFilterExercise(filterName);

    return (
        <View className="flex-1 bg-gray-50">
            <View className="bg-white px-2 pt-20">
                <View className="px-4">
                    <Text className="text-2xl font-bold">Exercise Library</Text>
                    <Text className="text-gray-600">Discover and learn new exercises</Text>
                </View>

                <View className="relative">
                    <LinearGradient
                        colors={["#fff", "#f9fafb00"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={{
                            position: "absolute",
                            left: -2,
                            top: 0,
                            bottom: 0,
                            width: 20,
                            zIndex: 10,
                        }}
                    />

                    <LinearGradient
                        colors={["#f9fafb00", "#fff"]}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={{
                            position: "absolute",
                            right: -2,
                            top: 0,
                            bottom: 0,
                            width: 20,
                            zIndex: 10,
                        }}
                    />

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="pb-6 pt-8 px-4"
                    >
                        {exerciseFilters.map((filter, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleFilter(filter.label)}
                                className={`flex-row gap-2 items-center py-3 pl-2.5 pr-4 rounded-lg border border-gray-500 mr-4 ${filterExercise === filter.label ? 'bg-gray-800' : ''}`}
                            >
                                <View className={`w-3 h-3 rounded-full border-2 border-gray-500 ${filterExercise === filter.label ? 'bg-white border-blue-500' : 'bg-black'}`}></View>
                                <Text className={`font-semibold ${filterExercise === filter.label ? 'text-white' : ''}`}>
                                    {filter.title}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                </View>

            </View>

            <ScrollView className="flex-1 px-6 pt-6">
                <View className="gap-5 pb-36">
                    {exercises.filter((exercise) => exercise.filter === filterExercise).map((exercise) => (
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
