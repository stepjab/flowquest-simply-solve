import React from "react";
import { cn } from "@/lib/utils";

interface AnswerButtonProps {
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
  selected,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full py-3 px-6 rounded-lg border text-left transition-all hover:shadow-md",
        selected
          ? "border-medical-primary bg-medical-primary/10 text-medical-primary shadow-medical-primary/20"
          : "border-medical-accent hover:border-medical-primary/50 bg-white/80 backdrop-blur-sm"
      )}
    >
      {children}
    </button>
  );
};