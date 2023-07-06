import { StatusBar } from "expo-status-bar";
import { View, Image, Text } from "react-native";
import styles from "./style";

export default function Story() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 80,
          width: 80,
          borderRadius: 60,
          backgroundColor: "#D4D4D4",
        }}
        source={require("../../../assets/story.png")}
      />
      <Text>Usuário</Text>

      <StatusBar style="auto" />
    </View>
  );
}
