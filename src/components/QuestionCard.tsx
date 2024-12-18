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
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 animate-slideIn border border-medical-accent/20">
        <h1 className="text-2xl font-semibold text-medical-text mb-8">
          Предварительное определение риска развития сахарного диабета
        </h1>
        
        <p className="text-medical-primary mb-6 font-medium">
          Пройдите тест из 16 вопросов для определения предрасположенности развития сахарного диабета и получите рекомендации для диагностики
        </p>

        <div className="flex items-center mb-8">
          <div className="text-4xl font-bold text-medical-primary">
            {currentQuestion}
            <span className="text-gray-400">/{totalQuestions}</span>
          </div>
        </div>

        {info && (
          <div className="bg-medical-secondary/70 backdrop-blur-sm rounded-lg p-4 mb-6 shadow-inner">
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
    </div>
  );
};