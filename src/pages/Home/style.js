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
    textAlignVertical: "center",
  },
  btnEnter: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#1967DB",
    borderRadius: 30,
    paddingVertical: 10,
    width: "80%",
  },
  btnCreateAccount: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    opacity: 1.0,
    borderRadius: 15,
    paddingVertical: 5,
    marginTop: 30,
    width: "80%",
    borderWidth: 2,
    borderColor: "#1967DB",
    marginTop: 80,
  },
});

export default styles;
