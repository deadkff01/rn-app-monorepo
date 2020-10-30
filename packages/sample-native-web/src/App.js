import React from "react";
import { Text } from "react-native";
import { CustomButton } from "./components/CustomButton";
import { CustomView } from "./components/CustomView";

function App() {
  return (
    <>
      <Text>hello my friend</Text>
      <CustomButton />
      <CustomView>teste emotion</CustomView>
    </>
  );
}

export default App;
