//This is the importation of components
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Constants from "expo-constants";

//This is to add the Employee to the Employee Information
export default function Post({ route, navigation }) {
  const [employee, setUser] = useState({
    Fullname: "",
    Phone: "",
    Department: "",
    Street: "",
    City: "",
    State: "",
    Zip: "",
    Country: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeName = (value) => {
    setUser({ ...employee, Fullname: value });
  };

  const onChangePhone = (value) => {
    setUser({ ...employee, Phone: value });
  };

  const onChangeDepartment = (value) => {
    setUser({ ...employee, Department: value });
  };

  const onChangeStreet = (value) => {
    setUser({ ...employee, Street: value });
  };

  const onChangeCity = (value) => {
    setUser({ ...employee, City: value });
  };

  const onChangeState = (value) => {
    setUser({ ...employee, State: value });
  };

  const onChangeZip = (value) => {
    setUser({ ...employee, Zip: value });
  };

  const onChangeCountry = (value) => {
    setUser({ ...employee, Country: value });
  };

  //This to save the Employee Information
  const AddEmployee = () => {
    setLoading(true);
    let info = `Employee Full Name=${employee.Fullname}&Phone=${employee.Phone}&Department=${employee.Department}&Street=${employee.Street}&City=${employee.City}&State=${employee.State}&Zip=${employee.Zip}&Country=${employee.Country}`;

    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/x-www-form.urlencoded");

    //This is to send a request to the Frontend by Networking
    fetch("http://localhost:44350/helloworldWebService1.asmx/AddEmployees", {
      method: "POST",
      headers: myHeaders,
      body: info /*JSON.stringify({
        employeename: employee.employeename,
        phone: employee.phone,
        roidepartment: employee.roidepartment,
        street: employee.street,
        city: employee.city,
        state: employee.state,
        zip: employee.zip,
        country: employee.country,*/,
    })
      //})
      .then((response) => {
        setLoading(false);
        console.log("B4 push");
        navigation.replace("Get");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("Error" + error));
  };

  //This ought to return the Employee Information for Adding
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Full Name"}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
      />

      <TextInput
        placeholder={"Phone"}
        onChangeText={(value) => onChangePhone(value)}
        style={styles.input}
      />

      <TextInput
        placeholder={"Department"}
        onChangeText={(value) => onChangeDepartment(value)}
        style={styles.input}
      />

      <TextInput
        placeholder={"Street"}
        onChangeText={(value) => onChangeStreet(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"City"}
        onChangeText={(value) => onChangeCity(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"State"}
        onChangeText={(value) => onChangeState(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Zip"}
        onChangeText={(value) => onChangeZip(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Country"}
        onChangeText={(value) => onChangeCountry(value)}
        style={styles.input}
      />

      <TouchableOpacity onPress={AddEmployee}>
        <View style={{ backgroundColor: "red", padding: 20 }}>
          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 70,
              fontFamily: "SFUIDisplay-Bold",
              borderTopWidth: 50,
              borderLeftWidth: 50,
              borderRightWidth: 50,
              borderBottomWidth: 50,
            }}
          >
            {loading
              ? "Awaiting to add the Employee to the Employee Information.."
              : "Add Employee"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

//This is the StyleSheet Creation of Adding the Employee
const styles = StyleSheet.create({
  container: {
    flex: 10,
    paddingTop: Constants.statusBarHeight,
    padding: 80,
    margin: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});
