import { StatusBar, Text, View } from "react-native";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"}/>
      <HomeScreen/>
    </>

    

  );
}

