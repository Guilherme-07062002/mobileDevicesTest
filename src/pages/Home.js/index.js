import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./style";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <StatusBar style="auto" />
    </View>
  );
}
