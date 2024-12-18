import React, { useState } from "react";
import { QuestionCard } from "@/components/QuestionCard";
import { AnswerButton } from "@/components/AnswerButton";
import { NavigationButtons } from "@/components/NavigationButtons";

const questions = [
  {
    question: "Каковы показатели вашего артериального давления?",
    info: [
      "Норма в 16-20 лет: 100-120/70-80",
      "Норма 20-40 лет:120-130/70-80",
      "Норма 40-60 лет: до 140/до 90",
      "Норма от 60 лет: до 150/до 90",
    ],
    options: ["В норме", "Высокое"],
  },
  {
    question: "Каков ваш показатель уровня холестерина?",
    info: ["норма общего холестерина в крови у человека — 3,0-5,0 ммоль/л"],
    options: ["В норме", "Высокий"],
  },
  // Add more questions here
];

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <QuestionCard
        currentQuestion={currentQuestion + 1}
        totalQuestions={16}
        question={questions[currentQuestion].question}
        info={questions[currentQuestion].info}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions[currentQuestion].options.map((option) => (
            <AnswerButton
              key={option}
              selected={answers[currentQuestion] === option}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </AnswerButton>
          ))}
        </div>
        <NavigationButtons
          onNext={handleNext}
          onBack={handleBack}
          showBack={currentQuestion > 0}
        />
      </QuestionCard>
    </div>
  );
};

export default Index;