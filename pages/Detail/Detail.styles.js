import { Dimensions, StyleSheet } from "react-native";

const windowSize = Dimensions.get("window");
export default styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    resizeMode: "contain",
    width: windowSize.width,
    height: windowSize.height / 3,
    backgroundColor: "#fff",
  },
  innerContainer: {
    padding: 10,
    marginVertical: 5,
  },
  innerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  desc: { fontSize: 18 },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right",
  },
});
