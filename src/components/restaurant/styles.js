import { StyleSheet, Dimensions } from "react-native";

const screenWith = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // // marginBottom: 80,
    // gap: 10,
  },

  viewContent: {
    flex: 1,
    width: "100%",
    marginTop: -40,
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "white",
    backgroundColor: "#fff",
    zIndex: 0,
    padding: 20,
  },

  viewContentTitle: {
    width: 340,
    fontSize: 22,
    color: "#333",
    textAlign: "center",
    fontWeight: 700,
    marginTop: 40,
  },

  imageTopo: {
    width: screenWith,
    height: 150,
    resizeMode: "cover",
  },

  contentDescription: {
    width: 320,
    marginTop: 40,
  },

  contentTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },

  contentText: {
    width: 320,
    fontSize: 14,
    fontWeight: "400",
    color: "#808080",
    lineHeight: 22,
  },
});
