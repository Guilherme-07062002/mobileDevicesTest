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
  },
  story: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: "15%",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
