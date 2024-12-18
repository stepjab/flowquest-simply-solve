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
        "w-full py-3 px-6 rounded-lg border text-left transition-colors",
        selected
          ? "border-medical-primary bg-medical-primary/10 text-medical-primary"
          : "border-medical-accent hover:border-medical-primary/50"
      )}
    >
      {children}
    </button>
  );
};