import React from "react";

interface NavigationButtonsProps {
  onNext: () => void;
  onBack: () => void;
  showBack: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNext,
  onBack,
  showBack,
}) => {
  return (
    <div className="flex justify-between mt-8">
      {showBack ? (
        <button
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-medical-primary transition-colors"
        >
          ← Назад
        </button>
      ) : (
        <div />
      )}
      <button
        onClick={onNext}
        className="flex items-center text-medical-primary hover:text-medical-success transition-colors"
      >
        Далее →
      </button>
    </div>
  );
};