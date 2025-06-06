import { Check } from 'lucide-react';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export const FormProgress = ({ currentStep, totalSteps, stepTitles }: FormProgressProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index} className="flex items-center">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
              ${index < currentStep 
                ? 'bg-green-500 text-white shadow-lg' 
                : index === currentStep 
                ? 'bg-blue-500 text-white shadow-lg scale-110' 
                : 'bg-slate-200 text-slate-500'
              }
            `}>
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                index + 1
              )}
            </div>
            {index < totalSteps - 1 && (
              <div className={`
                w-20 h-0.5 mx-3 transition-colors duration-300
                ${index < currentStep ? 'bg-green-500' : 'bg-slate-200'}
              `} />
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-light text-slate-800 mb-2">
          {stepTitles[currentStep]}
        </h2>
        <p className="text-slate-600 font-light">
          Step {currentStep + 1} of {totalSteps}
        </p>
      </div>
    </div>
  );
};