import React from 'react';

const HomeScreen = ({ data, updateData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50 p-6">
      <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full flex overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:block md:w-1/2 bg-blue-500 relative">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Modern abstract"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-transparent to-transparent opacity-70"></div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          {/* Step Indicator */}
          <div className="flex items-center mb-10">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold mr-5 shadow-lg animate-pulse">
              1
            </div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Personal Information
            </h2>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <input
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            />
            <input
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            />
            <input
              name="age"
              value={data.age}
              onChange={handleChange}
              placeholder="Age"
              type="number"
              min="0"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            />
            <button
              onClick={onNext}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
