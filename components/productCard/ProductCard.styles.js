import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    margin: 8,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderRadius: 8,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  inner_container: {
    padding: 5,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    textAlign: "right",
    marginRight: 5,
  },
});
