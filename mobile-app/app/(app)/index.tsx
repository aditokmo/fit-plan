
import MonthlyStatsCard from "@/screens/Home/components/MonthlyStatsCard";
import QuickActionCard from "@/screens/Home/components/QuickActionCard";
import TodayGoalsCard from "@/screens/Home/components/TodayGoalsCard";
import Topbar from "@/screens/Home/components/Topbar";
import { ScrollView } from "react-native";

export default function Home() {
    return (
        <ScrollView className="flex-1 px-6 bg-white pt-20 bg-gray-50">
            <Topbar />
            <TodayGoalsCard />
            <QuickActionCard />
            <MonthlyStatsCard />
        </ScrollView >
    );
}