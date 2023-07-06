import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import Story from "../../components/story";

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

      <View style={styles.story}>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
      </View>

      <Image
        style={{
          position: "relative",
          top: "16%",
          width: "96%",
          height: "61%",
        }}
        source={require("../../../assets/post.png")}
      />

      <View style={styles.bottom}>
        <Image
          style={styles.image}
          source={require("../../../assets/home.png")}
        />
        <Image
          style={styles.image}
          source={require("../../../assets/search.png")}
        />
        <Image
          style={styles.image}
          source={require("../../../assets/add.png")}
        />
        <Image
          style={styles.image}
          source={require("../../../assets/reel.png")}
        />
        <Image
          style={styles.image}
          source={require("../../../assets/story.png")}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
