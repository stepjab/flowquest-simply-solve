import React, { useState } from "react";
import { QuestionCard } from "@/components/QuestionCard";
import { AnswerButton } from "@/components/AnswerButton";
import { NavigationButtons } from "@/components/NavigationButtons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "Каковы показатели вашего артериального давления?",
    info: [
      "Норма в 16-20 лет: 100-120/70-80",
      "Норма 20-40 лет:120-130/70-80",
      "Норма 40-60 лет: до 140/до 90",
      "Норма от 60 лет: до 150/до 90",
    ],
    type: "buttons",
    options: ["В норме", "Высокое"],
  },
  {
    question: "Каков ваш показатель уровня холестерина?",
    info: ["норма общего холестерина в крови у человека — 3,0-5,0 ммоль/л"],
    type: "buttons",
    options: ["В норме", "Высокий"],
  },
  {
    question: "Рассчитайте ваш индекс массы тела",
    type: "bmi",
  },
  // Add more questions here
];

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to meters
    if (weightNum && heightNum) {
      const bmi = (weightNum / (heightNum * heightNum)).toFixed(1);
      setBmiResult(`Ваш ИМТ: ${bmi}`);
      handleAnswer(bmi);
    }
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

  const renderQuestionContent = () => {
    const currentQ = questions[currentQuestion];
    
    if (currentQ.type === "bmi") {
      return (
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                type="number"
                placeholder="Вес, кг"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <Input
                type="number"
                placeholder="Рост, см"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          <Button 
            onClick={calculateBMI}
            className="w-full bg-medical-primary text-white hover:bg-medical-success"
          >
            Рассчитать
          </Button>
          {bmiResult && (
            <div className="mt-4 p-4 bg-medical-secondary rounded-lg">
              {bmiResult}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQ.options?.map((option) => (
          <AnswerButton
            key={option}
            selected={answers[currentQuestion] === option}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </AnswerButton>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <QuestionCard
        currentQuestion={currentQuestion + 1}
        totalQuestions={16}
        question={questions[currentQuestion].question}
        info={questions[currentQuestion].info}
      >
        {renderQuestionContent()}
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