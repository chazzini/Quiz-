import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";
import { Question } from "../type";
import {} from "react";
interface Card {
  question: Question;
}

const Card = ({ question, children }: PropsWithChildren<Card>) => {
  return (
    <View style={style.questionCard}>
      <Text style={style.question}>{question.title}</Text>
      {children}
    </View>
  );
};

export default Card;

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
