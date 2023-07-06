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
    top: "13%",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    gap: 20,
    backgroundColor: "#fff",
    height: "8%",
    width: "100%",
  },
});

export default styles;
