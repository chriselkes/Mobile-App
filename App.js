//This is the importation of components
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./routes/rootStack";
import CompanyLogo from "./components/CompanyLogo";

//This is export default on what appears in this screen
export default function App() {
  //It ought to be displayed in the Frontend of the Mobile Application
  return (
    <NavigationContainer>
      <CompanyLogo />
      <RootNavigator />
    </NavigationContainer>
  );
}
/* Tertiary Provider: TAFE NSW
		Qualification: Certficate IV in Inforamtion Technology (specializing in Programming)
		Name: Chris Elkes
		Role: ICT Technician
		Student Number: 802897774 
  	Date: November 14th, 2022
		Cluster: Mobile Application Development
		Unit: Use version control systems in development environments 
    Unit: Develop mobile applications
    Unit: Build a user interface
    Unit: Analyse software requirements 
    Assessment: Project Assessment:
		Part: 3
	  Description: The object of this is to develo a Mobile Application for Red Opal Innovations*/

//Reference: TAFE NSW Mobile Apps Development Cluster Class Notes

/*Reference: reactnative.dev. (n.d.). Setting up the development environment · React Native. [online] Available at:
 https://reactnative.dev/docs/environment-setup.*/

/*Reference: LinkedIn. (n.d.). Working with React Native - React Native Video Tutorial | LinkedIn Learning, formerly Lynda.com. 
[online] Available at: 
https://www.linkedin.com/learning/react-native-essential-training/working-with-react-native?autoplay=true&u=57684225 
[Accessed 14 Nov. 2022]. */

/*Reference: reactnative.dev. (n.d.). Core Components and Native Components · React Native. [online] Available at:
https://reactnative.dev/docs/intro-react-native-components.*/

/*Reference: reactnative.dev. (n.d.). React Fundamentals · React Native. [online] Available at:
https://reactnative.dev/docs/intro-react.*/

/*Reference: www.youtube.com. (n.d.). Build your first React Native app - Todo List Tutorial Part 1. [online] Available at:
https://www.youtube.com/watch?v=0kL6nhutjQ8&ab_channel=MadeWithMatt [Accessed 14 Nov. 2022].*/

/*Reference:snack.expo.dev. (n.d.). CRUD (POST, PATCH, DELETE, GET) React Native REST API - Snack. [online] Available at: 
https://snack.expo.dev/@ipungdev/3cfd30.*/
