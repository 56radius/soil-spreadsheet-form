import React, { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import PreferencesForm from './components/PreferencesForm';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    interests: [],
    contactMethod: '',
    newsletter: false,
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {!showForm ? (
        <HomeScreen onStart={() => setShowForm(true)} />
      ) : (
        <PreferencesForm data={formData} updateData={(newData) => setFormData({ ...formData, ...newData })} />
      )}
    </div>
  );
};

export default App;
