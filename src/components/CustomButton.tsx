import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const CustomButton = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={style.buttonContainer}>
        <Text style={style.buttonText}>Next</Text>
        {/* <MaterialCommunityIcons name="arrow-right" size={24} color="white" /> */}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const style = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#005050",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    flex: 1,
    textAlign: "center",
  },
});
