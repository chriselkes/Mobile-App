//This is the importation of components
import { StatusBar, StyleSheet } from "react-native";

//This is the StyleSheet Creation for Frontend
const styles = StyleSheet.create({
  container: {
    flex: 30,
    backgroundColor: "#8b0000",
    alignItems: "left",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "silver",
    marginHorizontal: 70,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 70,
    textAlign: "center",
  },
});

//This is export default on what appears in this screen
export default styles;
