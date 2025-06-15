import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import AnswerOption from "./AnswerOption";
import { Question } from "../type";
interface QuestionCard {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCard) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectedOption = (option: string) => {
    console.warn("selected:", option);
    setSelectedOption(option);
  };

  return (
    <View style={style.questionCard}>
      <Text style={style.question}>{question.title}</Text>

      <View style={{ gap: 10 }}>
        {question.options.map((option) => {
          return (
            <AnswerOption
              value={option}
              isSelected={selectedOption === option}
              onPress={handleSelectedOption}
            />
          );
        })}
      </View>
    </View>
  );
};

export default QuestionCard;

const style = StyleSheet.create({
  questionCard: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 40,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  question: {
    fontWeight: 700,
    fontSize: 24,
  },
});
