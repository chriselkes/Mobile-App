//This is the importation of components
import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

//This is to create the Employee Information for Updation and Deletion
const Detail = ({ route, navigation }) => {
  const { item } = route.params;

  const [employee, setUser] = useState({
    name: item.Name,
    phone: item.Phone,
    street: item.Street,
    city: item.City,
    state: item.State,
    zip: item.Zip,
    country: item.Country,
    department: item.Department.Id,
  });

  const onChangeFullName = (value) => {
    setUser({ ...employee, name: value });
  };

  const onChangePhone = (value) => {
    setUser({ ...employee, phone: value });
  };

  const onChangeDepartment = (value) => {
    setUser({ ...employee, department: value });
  };

  const onChangeStreet = (value) => {
    setUser({ ...employee, street: value });
  };

  const onChangeCity = (value) => {
    setUser({ ...employee, city: value });
  };

  const onChangeState = (value) => {
    setUser({ ...employee, state: value });
  };

  const onChangeZip = (value) => {
    setUser({ ...employee, zip: value });
  };

  const onChangeCountry = (value) => {
    setUser({ ...employee, country: value });
  };

  //This is to update the Employee Information
  const updatedata = () => {
    let info = `Id=${item.Id}&Employee Full Name=${employee.name}&Phone=${employee.phone}&Department=${employee.department}&Street=${employee.street}&City=${employee.city}&State=${employee.state}&Zip=${employee.zip}&Country=${employee.country}`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x.www.form.urlencoded");

    console.log(info); //This is to display the updation Employee Information at Frontend

    //This is to send a request to the Frontend by Networking
    fetch(
      "http://192.168.0.3:44350/helloworldWebService1.asmx/UpdateEmployee",
      {
        method: "POST",
        headers: myHeaders,
        body: info,
      }
    )
      .then((response) => {
        response.text();
        navigation.replace("Get");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  //This is to delete Employee Information
  const deletedata = () => {
    let cmd = `Id=${item.Id}`;
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    //This is to send a request to the Frontend by Networking
    fetch(
      "http://192.168.0.3:44350/helloworldWebService1.asmx/DeleteEmployee",
      {
        method: "POST",
        headers: myHeaders,
        body: cmd,
      }
    )
      .then((response) => {
        response.text();
        navigation.replace("Get");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  //This ought to return the Employee Information for Updation and Deletion
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Employee Full Name"}
        onChangeText={(value) => onChangeFullName(value)}
        style={styles.input}
        value={employee.name}
      />

      <TextInput
        placeholder={"Phone"}
        onChangeText={(value) => onChangePhone(value)}
        style={styles.input}
        value={employee.phone}
      />

      <TextInput
        placeholder={"Department"}
        onChangeText={(value) => onChangeDepartment(value)}
        style={styles.input}
        value={employee.department}
      />

      <TextInput
        placeholder={"Street"}
        onChangeText={(value) => onChangeStreet(value)}
        style={styles.input}
        value={employee.street}
      />

      <TextInput
        placeholder={"City"}
        onChangeText={(value) => onChangeCity(value)}
        style={styles.input}
        value={employee.city}
      />

      <TextInput
        placeholder={"State"}
        onChangeText={(value) => onChangeState(value)}
        style={styles.input}
        value={employee.state}
      />

      <TextInput
        placeholder={"Zip"}
        onChangeText={(value) => onChangeZip(value)}
        style={styles.input}
        value={employee.zip}
      />

      <TextInput
        placeholder={"Country"}
        onChangeText={(value) => onChangeCountry(value)}
        style={styles.input}
        value={employee.country}
      />

      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity onPress={updatedata}>
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
              Update Employee
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deletedata}>
          <View style={{ backgroundColor: "silver", padding: 20 }}>
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
              Delete Employee
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//This is the StyleSheet Creation of Updation and Deletion of Employee Information
const styles = StyleSheet.create({
  container: {
    flex: 100,
    marginHorizontal: 150,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 15,
  },
});

//This is export default on what appears in this screen
export default Detail;
