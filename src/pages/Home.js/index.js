import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styles from "./style";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Português (Brasil)</Text>
      <Image source={require("../../../assets/instagram-icon.png")} />

      <StatusBar style="auto" />
    </View>
  );
}
