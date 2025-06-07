import React, { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import PreferencesForm from './components/PreferencesForm';
import ReviewScreen from './components/ReviewScreen';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    interests: [],
    contactMethod: '',
    newsletter: false,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const updateData = (newData) => setFormData((prev) => ({ ...prev, ...newData }));

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      {step === 1 && <HomeScreen data={formData} updateData={updateData} onNext={nextStep} />}
      {step === 2 && <PreferencesForm data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />}
      {step === 3 && <ReviewScreen data={formData} onBack={prevStep} />}
    </div>
  );
};

export default App;