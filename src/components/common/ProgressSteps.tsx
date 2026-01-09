import React from 'react';
import { Check } from 'lucide-react';

interface ProgressStepsProps {
  currentStep: number;
  steps: string[];
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <React.Fragment key={stepNumber}>
              {/* Step Circle */}
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    isCompleted
                      ? 'bg-darzi-gold text-white'
                      : isCurrent
                      ? 'bg-darzi-gold text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
                </div>
                <p
                  className={`mt-2 text-xs sm:text-sm font-medium ${
                    isCurrent ? 'text-darzi-dark' : 'text-gray-500'
                  }`}
                >
                  {step}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-colors ${
                    isCompleted ? 'bg-darzi-gold' : 'bg-gray-300'
                  }`}
                  style={{ marginTop: '-24px' }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};