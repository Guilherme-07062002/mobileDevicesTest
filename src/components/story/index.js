import { StatusBar } from "expo-status-bar";
import { View, Image, Text } from "react-native";
import styles from "./style";

export default function Story() {
  return (
    <View style={styles.container}>
      <Image
        style={{ borderRadius: 60 }}
        source={require("../../../assets/story.png")}
      />
      <Text>Usuário</Text>

      <StatusBar style="auto" />
    </View>
  );
}
