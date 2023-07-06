import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput } from "react-native";
import styles from "./style";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Português (Brasil)</Text>
      <Image source={require("../../../assets/instagram-icon.png")} />

      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>

      <StatusBar style="auto" />
    </View>
  );
}
