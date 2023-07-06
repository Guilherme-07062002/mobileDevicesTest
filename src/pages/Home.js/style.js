import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  inputContainer: {
    flex: 1,
    gap: 30,
  },
  textStyle: {
    color: "#919191",
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#D1D1D1",
    backgroundColor: "#fff",
    color: "#B8B8B8",
    width: "85%",
    height: 70,
    paddingHorizontal: 20,
  },
});

export default styles;
