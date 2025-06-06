import { Button } from '../components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  formData: any;
  currentStepFields: string[];
}

export const FormNavigation = ({ 
  currentStep, 
  totalSteps, 
  onNext, 
  onBack, 
  formData,
  currentStepFields 
}: FormNavigationProps) => {
  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.personalInfo.firstName && 
               formData.personalInfo.lastName && 
               formData.personalInfo.email;
      case 1:
        return formData.preferences.interests.length > 0 && 
               formData.preferences.contactMethod;
      case 2:
        return formData.feedback.experience && 
               formData.feedback.rating > 0;
      default:
        return true;
    }
  };

  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
      <Button
        variant="outline"
        onClick={onBack}
        disabled={currentStep === 0}
        className="flex items-center space-x-2 px-6 py-3 rounded-xl border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 disabled:opacity-50"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="font-light">Back</span>
      </Button>

      <div className="text-center">
        <p className="text-sm text-slate-500 font-light">
          {currentStep + 1} of {totalSteps}
        </p>
      </div>

      <Button
        onClick={onNext}
        disabled={!isStepValid()}
        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="font-light">
          {currentStep === totalSteps - 1 ? 'Submit' : 'Next'}
        </span>
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};
