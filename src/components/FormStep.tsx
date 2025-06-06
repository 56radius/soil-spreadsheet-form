import { PersonalInfoStep } from '../components/steps/PersonalInfoStep';
import { PreferencesStep } from '../components/steps/PreferencesStep';
import { FeedbackStep } from '../components/steps/FeedbackStep';

interface FormStepProps {
  step: number;
  stepData: any;
  formData: any;
  updateFormData: (section: string, data: any) => void;
}

export const FormStep = ({ step, stepData, formData, updateFormData }: FormStepProps) => {
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <PersonalInfoStep
            data={formData.personalInfo}
            updateData={(data) => updateFormData('personalInfo', data)}
          />
        );
      case 1:
        return (
          <PreferencesStep
            data={formData.preferences}
            updateData={(data) => updateFormData('preferences', data)}
          />
        );
      case 2:
        return (
          <FeedbackStep
            data={formData.feedback}
            updateData={(data) => updateFormData('feedback', data)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in">
      <p className="text-slate-600 font-light mb-6 text-center">
        {stepData.description}
      </p>
      {renderStep()}
    </div>
  );
};
