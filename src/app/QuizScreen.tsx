import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import questions from "../questions";
import AnswerOption from "../components/AnswerOption";
import CustomButton from "../components/CustomButton";
import { Question } from "../type";

const QuizScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  let question = questions[questionIndex];

  const onNext = () => {
    setQuestionIndex((prev) => prev + 1);
  };
  const handleCustomButtonLongPress = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <Text style={style.position}>Question {questionIndex + 1}/5</Text>
        <View style={{ alignItems: "center", width: "100%" }}>
          {question ? (
            <View>
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
          ) : (
            <Card title="Well done">
              <View style={{ gap: 10 }}>
                <Text>Correct answer: 2/5</Text>
                <Text>Best score: 10</Text>
              </View>
            </Card>
          )}
        </View>

        <CustomButton
          title={questionIndex >= questions.length - 1 ? "Submit" : "Next"}
          onPress={onNext}
          onLongPress={handleCustomButtonLongPress}
          rightIcon={
            !(questionIndex >= questions.length - 1) ? (
              <MaterialCommunityIcons
                name="arrow-right"
                size={24}
                color="white"
              />
            ) : null
          }
        />
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
  buttonIcon: {
    position: "absolute",
    top: 20,
    right: 10,
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
