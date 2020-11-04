import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { CustomButtonStyles } from "./style";

export const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.textStyle}>Some Button Test</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(CustomButtonStyles);
