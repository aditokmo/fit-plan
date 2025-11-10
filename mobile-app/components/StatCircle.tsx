import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { Circle, Svg } from "react-native-svg";

interface StatCircleProps {
    size: number;
    strokeWidth: number;
    progress: number; // 0 - 100
    color?: string;
    bgColor?: string;
    icon?: ImageSourcePropType; // prop za ikonice/unutrašnju sliku
}

export const StatCircle = ({
    size,
    strokeWidth,
    progress,
    color = "green",
    bgColor = "#e5e5e5",
    icon,
}: StatCircleProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <View style={{ width: size, height: size, justifyContent: "center", alignItems: "center" }}>
            <Svg width={size} height={size}>
                <Circle
                    stroke={bgColor}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <Circle
                    stroke={color}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                />
            </Svg>

            {/* Ikonica u sredini */}
            {icon && (
                <Image
                    source={icon}
                    style={{
                        width: size * 0.5, // prilagodi veličinu ikone u odnosu na krug
                        height: size * 0.5,
                        position: "absolute",
                    }}
                    resizeMode="contain"
                />
            )}
        </View>
    );
};
