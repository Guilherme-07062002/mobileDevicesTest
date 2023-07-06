import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Feed({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 140,
            alignItems: "center",
          }}
        >
          <Image source={require("../../../assets/insta-letter.png")} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ marginRight: 20 }}>S2</Text>
            <Text>msg</Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}