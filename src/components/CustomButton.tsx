import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import React, { ReactNode } from "react";

type CustomButton = {
  title: string;
  rightIcon?: ReactNode;
} & TouchableOpacityProps;

const CustomButton = ({
  title,
  rightIcon,
  ...TouchableOpacityProps
}: CustomButton) => {
  return (
    <TouchableOpacity {...TouchableOpacityProps}>
      <View style={style.buttonContainer}>
        <Text style={style.buttonText}>{title}</Text>
        <View style={style.rightIcon}>{rightIcon}</View>
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
  rightIcon: {
    position: "absolute",
    top: 20,
    right: 10,
  },
});
