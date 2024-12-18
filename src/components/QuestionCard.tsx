import React from "react";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  currentQuestion: number;
  totalQuestions: number;
  question: string;
  children: React.ReactNode;
  info?: string[];
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  currentQuestion,
  totalQuestions,
  question,
  children,
  info,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-slideIn">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-medical-text">
          Предварительное определение риска развития сахарного диабета
        </h1>
        <div className="w-24 h-24">
          <img
            src="/lovable-uploads/9bcae850-5d01-471d-8948-af7cba9e390c.png"
            alt="Medical device"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      <p className="text-medical-primary mb-6">
        Пройдите тест из 16 вопросов для определения предрасположенности развития сахарного диабета и получите рекомендации для диагностики
      </p>

      <div className="flex items-center mb-8">
        <div className="text-4xl font-bold text-medical-primary">
          {currentQuestion}
          <span className="text-gray-400">/{totalQuestions}</span>
        </div>
      </div>

      {info && (
        <div className="bg-medical-secondary rounded-lg p-4 mb-6">
          {info.map((item, index) => (
            <p key={index} className="text-sm text-medical-text mb-1">
              • {item}
            </p>
          ))}
        </div>
      )}

      <h2 className="text-xl font-medium text-medical-text mb-6">{question}</h2>

      <div className="space-y-4">{children}</div>
    </div>
  );
};