import { Stack, useLocalSearchParams, router } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { exercises } from "@/constants";

export default function ExerciseDetails() {
    const { slug } = useLocalSearchParams();
    const exercise = exercises.find((ex) => ex.slug === slug);

    if (!exercise) {
        return (
            <View style={styles.center}>
                <Text style={styles.notFound}>Exercise not found</Text>
            </View>
        );
    }

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View className="h-screen relative">
                <View style={{ width: "100%", height: 500 }}>
                    <Image
                        source={exercise.image}
                        className="w-full h-full"
                        resizeMode="contain"
                    />
                </View>

                <View style={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 64 }}>
                    <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 12 }}>
                        {exercise.name}
                    </Text>
                    <Text style={{ fontSize: 16, lineHeight: 24, color: "#4B5563" }}>
                        {exercise.desc}
                    </Text>

                    <View className="w-full fixed bottom-0 gap-4 mt-8">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="w-full bg-blue-500 p-4 rounded-md"
                        >
                            <Text className="text-white text-center font-semibold">View Workout</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="w-full bg-black p-4 rounded-md"
                        >
                            <Text className="text-white text-center font-semibold">Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 60,   // adjust for status bar
        left: 24,
        zIndex: 100,
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 50,
    },
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
    notFound: { fontSize: 18, color: "#6B7280" },
});
