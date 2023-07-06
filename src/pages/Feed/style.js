import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  textStyle: {
    fontWeight: "bold",
    position: "relative",
    right: 40,
    fontSize: 20,
  },
  header: {
    position: "absolute",
    top: "6%",
    borderStartColor: "red",
    
  },
});

export default styles;
