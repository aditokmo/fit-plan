import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { icons } from '@/constants/icons'

interface PropTypes {
    title: string,
    icon: any,
    focused: boolean
}

const TabIcon = ({ title, icon, focused }: PropTypes) => {
    if (!focused) {
        return (
            <View className='relative flex flex-col gap-[8px] w-full flex-1 min-w-[132px] min-h-24 justify-center items-center rounded-full overflow-hidden'>
                <Image source={icon} className='w-8 h-8' />
                <Text className='absolute bottom-2 text-sm font-semibold text-gray-400'>{title}</Text>
            </View>
        )
    }

    return (
        <View className='relative flex flex-col gap-[8px] w-full flex-1 min-w-[132px] min-h-24 justify-center items-center rounded-full overflow-hidden'>
            <Image source={icon} className='w-8 h-8' />
            <Text className='absolute bottom-2 text-sm font-semibold text-[#acec09]'>{title}</Text>
            <View className='absolute bottom-0 w-1 h-1 rounded-full bg-[#acec09]'></View>
        </View>
    )
}

const _layout = () => {
    const session = true;
    const isLoading = false;
    if (!session) return <Redirect href="/login" />
    if (isLoading) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
    );

    return (
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
                    display: 'flex',
                    backgroundColor: '#333',
                    borderRadius: 30,
                    paddingTop: 20,
                    height: 100,
                    position: 'absolute',
                    overflow: 'hidden',
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={focused ? icons.homeActive : icons.home} title={'Home'} />
                    )
                }}
            />
            <Tabs.Screen
                name="workout"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={focused ? icons.workoutActive : icons.workout} title={'Workout'} />
                    )
                }}
            />
            <Tabs.Screen
                name="meals"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={focused ? icons.mealActive : icons.meal} title={'Meals'} />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={focused ? icons.profileActive : icons.profile} title={'Profile'} />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout