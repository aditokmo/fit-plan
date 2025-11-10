import { icons } from '@/constants/icons';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';

interface PropTypes {
    title: string;
    icon: any;
    focused: boolean;
}

const TabIcon = ({ title, icon, focused }: PropTypes) => {
    return (
        <View className="relative flex flex-col gap-[8px] w-full flex-1 min-w-[132px] min-h-24 justify-center items-center rounded-full overflow-hidden">
            <Image source={icon} className="w-8 h-8" />
            <Text className={`absolute bottom-2 text-sm font-semibold ${focused ? 'text-black' : 'text-gray-400'}`}>
                {title}
            </Text>
            {focused && <View className="absolute bottom-0 w-1 h-1 rounded-full bg-black" />}
        </View>
    );
};

const _layout = () => {
    const session = true;
    const isLoading = false;

    if (!session) return <Redirect href="/login" />;
    if (isLoading)
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
        );

    return (
        <View className="flex-1 bg-[#090A07]">
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarItemStyle: {
                        width: '100%',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        height: 100,
                        paddingTop: 20,
                        position: 'absolute',
                        bottom: 0,
                        overflow: 'hidden',
                        borderTopWidth: 1,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={focused ? icons.homeActive : icons.home} title="Home" />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="workout"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={focused ? icons.workoutActive : icons.workout} title="Workout" />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="meals"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={focused ? icons.mealActive : icons.meal} title="Meals" />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={focused ? icons.profileActive : icons.profile} title="Profile" />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
};

export default _layout;
