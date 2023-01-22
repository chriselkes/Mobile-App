//This is the importation of components
import React from "react";
import { View, Image, StyleSheet } from "react-native";

//This is implement the Company Logo in the Frontend
const CompanyLogo = () => {
  return (
    //This is to view the Image of Red Opal Innovations
    <View>
      <Image
        styles={styles.logo}
        source={require("../assets/ROI Logo.png")} //This is the location
        //This is to style the Company Logo
        style={{
          width: 150,
          height: 74,
        }}
      />
    </View>
  );
};

//This is the StyleSheet Creation of the Company Logo
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});

//This is export default on what appears in this screen
export default CompanyLogo;
