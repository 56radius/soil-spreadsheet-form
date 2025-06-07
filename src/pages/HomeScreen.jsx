import React from 'react';

const HomeScreen = ({ data, updateData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fade-in">
      {/* Step Indicator */}
      <div className="flex items-center mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold mr-4 animate-pulse">
          1
        </div>
        <h2 className="text-2xl font-semibold text-blue-600">Personal Information</h2>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          name="age"
          value={data.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          onClick={onNext}
          className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
