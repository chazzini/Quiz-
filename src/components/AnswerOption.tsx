import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
interface AnswerOption {
  value: string;
  isSelected?: boolean;
  onPress: (b: string) => void;
}
const AnswerOption = ({ value, isSelected, onPress }: AnswerOption) => {
  return (
    <Pressable
      onPress={() => {
        onPress(value);
      }}
      style={
        isSelected
          ? { ...style.container, backgroundColor: "#e1f396" }
          : { ...style.container }
      }
    >
      <Text>{value}</Text>
    </Pressable>
  );
};

export default AnswerOption;

const style = StyleSheet.create({
  container: {
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 20,
    borderRadius: 100,
  },
});
