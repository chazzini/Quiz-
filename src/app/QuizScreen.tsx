import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import questions from "../questions";
import AnswerOption from "../components/AnswerOption";
import CustomButton from "../components/CustomButton";

const question = questions[0];

const QuizScreen = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectedOption = (option: string) => {
    console.warn("selected:", option);
    setSelectedOption(option);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <Text style={style.position}>Question 1/5</Text>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Card question={question}>
            <View style={{ gap: 10 }}>
              {question.options.map((option) => {
                return (
                  <AnswerOption
                    key={option}
                    value={option}
                    isSelected={selectedOption === option}
                    onPress={handleSelectedOption}
                  />
                );
              })}
            </View>
          </Card>
          <Text style={style.duration}>20sec</Text>
        </View>

        <CustomButton />

        <TouchableOpacity onPress={() => {}}>
          <View style={style.buttonContainer}>
            <Text style={style.buttonText}>Next</Text>
            <MaterialCommunityIcons
              name="arrow-right"
              size={24}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fdfef4",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
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
  duration: {
    marginTop: 10,
    fontSize: 18,
    color: "#005050",
  },
  position: {
    padding: 20,
    fontSize: 18,
    color: "gray",
    fontWeight: 400,
  },
});
