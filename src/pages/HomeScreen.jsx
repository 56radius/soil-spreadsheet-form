import React from 'react';

const HomeScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to AVINX Preferences</h1>
      <p className="text-gray-600 mb-6">Click below to tell us more about your interests and preferences.</p>
      <button
        onClick={onStart}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomeScreen;
