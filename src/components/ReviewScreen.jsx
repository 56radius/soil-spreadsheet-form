import React from 'react';

const ReviewScreen = ({ data, onBack }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">Step 3: Review & Submit</h2>
      <ul className="space-y-2">
        <li><strong>Name:</strong> {data.name}</li>
        <li><strong>Email:</strong> {data.email}</li>
        <li><strong>Age:</strong> {data.age}</li>
        <li><strong>Interests:</strong> {data.interests.join(', ')}</li>
        <li><strong>Contact Method:</strong> {data.contactMethod}</li>
        <li><strong>Newsletter:</strong> {data.newsletter ? 'Yes' : 'No'}</li>
      </ul>

      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="px-4 py-2 border rounded-xl hover:bg-gray-100">Back</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewScreen;