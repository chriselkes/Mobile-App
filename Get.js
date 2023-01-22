import React, { Component, useEffect, useState } from "react"; //This is to import the components from React
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native"; //This is to import the components from React-Native

import { StatusBar } from "expo-status-bar"; //This is to import exp-status-bar
import styles from "../components/style"; //This is to import styles

//This is to view the Employee Information
const Get = ({ navigation }) => {
  const [user, setUser] = useState();

  const GetData = async () => {
    try {
      //This is to send a request to the Frontend by Networking
      let response = await fetch(
        "http://192.168.0.3:44350/helloworldWebService1.asmx/GetEmployees"
      );
      let json = await response.json();
      setUser(json);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    GetData();
  }, []);

  const renderItem = ({ item }) => {
    //This is ought to return the Employee Information
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            item: item,
          })
        }
      >
        <View
          style={{
            borderBottomWidth: 50,
            borderBottomColor: "#dd",
            padding: 5,
            borderRadius: 50,
            borderTopWidth: 50,
            borderLeftWidth: 50,
            borderRightWidth: 50,
            borderStyle: 20,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Employee Id: {item.Id}</Text>
          <Text>Employee Full Name: {item.Name}</Text>
          <Text>Phone: {item.Phone}</Text>
          <Text>Street: {item.Street}</Text>
          <Text>City: {item.City}</Text>
          <Text>State: {item.State}</Text>
          <Text>Zip: {item.Zip}</Text>
          <Text>Country: {item.Country}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  //This is ought to return the list of the Employee Information
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={user}
          renderItem={renderItem}
          keyExtractor={(item) => item.Id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

//This is export default on what appears in this screen
export default Get;
