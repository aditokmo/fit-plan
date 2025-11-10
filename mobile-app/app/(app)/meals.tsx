import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from "react-native";

export default function Meals() {
    return (
        <LinearGradient
            colors={['#25471E', '#122216', '#090A07']}
            locations={[0, 0.40, 1]}
            start={{ x: 0.7, y: 0 }}
            end={{ x: 1.2, y: .3 }}
            style={styles.container}
        >
            <Text>
                Meals
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
