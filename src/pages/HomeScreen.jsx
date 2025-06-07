import React from 'react';

const HomeScreen = ({ data, updateData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">Step 1: Personal Information</h2>
      <div className="space-y-4">
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 border rounded-xl"
        />
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border rounded-xl"
        />
        <input
          name="age"
          value={data.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full p-3 border rounded-xl"
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