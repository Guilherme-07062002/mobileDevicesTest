import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Feed({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>

      <StatusBar style="auto" />
    </View>
  );
}
