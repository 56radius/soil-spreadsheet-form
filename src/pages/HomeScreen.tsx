import { useState } from 'react';

const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE"; // Replace with your actual URL

const HomeScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: { firstName: '', lastName: '', email: '', phone: '' },
    preferences: { interests: [], contactMethod: '', newsletter: false },
    feedback: { experience: '', suggestions: '', rating: 0 }
  });

  const steps = [
    {
      title: "Personal Information",
      fields: ['firstName', 'lastName', 'email', 'phone']
    },
    {
      title: "Preferences",
      fields: ['interests', 'contactMethod', 'newsletter']
    },
    {
      title: "Feedback",
      fields: ['experience', 'suggestions', 'rating']
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
      });

      const result = await response.json();
      if (result.result === 'success') {
        setIsComplete(true);
        alert("Form submitted successfully!");
      } else {
        throw new Error("Failed to submit.");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Error submitting form. Try again.");
    }
  };

  const updateFormData = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  if (isComplete) {
    return <div className="p-8 text-center">🎉 Thank you! Your form has been submitted.</div>;
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">{steps[currentStep].title}</h2>

      {currentStep === 0 && (
        <>
          <input
            type="text"
            placeholder="First Name"
            value={formData.personalInfo.firstName}
            onChange={e => updateFormData("personalInfo", "firstName", e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.personalInfo.lastName}
            onChange={e => updateFormData("personalInfo", "lastName", e.target.value)}
            className="input"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.personalInfo.email}
            onChange={e => updateFormData("personalInfo", "email", e.target.value)}
            className="input"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.personalInfo.phone}
            onChange={e => updateFormData("personalInfo", "phone", e.target.value)}
            className="input"
          />
        </>
      )}

      {currentStep === 1 && (
        <>
          <input
            type="text"
            placeholder="Interests (comma separated)"
            value={formData.preferences.interests.join(", ")}
            onChange={e =>
              updateFormData("preferences", "interests", e.target.value.split(",").map(s => s.trim()))
            }
            className="input"
          />
          <select
            value={formData.preferences.contactMethod}
            onChange={e => updateFormData("preferences", "contactMethod", e.target.value)}
            className="input"
          >
            <option value="">Preferred Contact</option>
            <option>Email</option>
            <option>Phone</option>
          </select>
          <label className="block mt-2">
            <input
              type="checkbox"
              checked={formData.preferences.newsletter}
              onChange={e => updateFormData("preferences", "newsletter", e.target.checked)}
            />
            Subscribe to newsletter
          </label>
        </>
      )}

      {currentStep === 2 && (
        <>
          <textarea
            placeholder="Your experience"
            value={formData.feedback.experience}
            onChange={e => updateFormData("feedback", "experience", e.target.value)}
            className="input"
          />
          <textarea
            placeholder="Suggestions"
            value={formData.feedback.suggestions}
            onChange={e => updateFormData("feedback", "suggestions", e.target.value)}
            className="input"
          />
          <input
            type="number"
            placeholder="Rating (0-10)"
            value={formData.feedback.rating}
            onChange={e => updateFormData("feedback", "rating", parseInt(e.target.value))}
            className="input"
          />
        </>
      )}

      <div className="flex justify-between mt-4">
        <button onClick={handleBack} disabled={currentStep === 0} className="btn">
          Back
        </button>
        <button onClick={handleNext} className="btn">
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
