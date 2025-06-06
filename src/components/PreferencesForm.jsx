import React from 'react';

const PreferencesForm = ({ data, updateData }) => {
  const interests = ['Technology', 'Design', 'Business', 'Education', 'Health', 'Travel'];

  const handleCheckboxChange = (interest, isChecked) => {
    const updated = isChecked
      ? [...data.interests, interest]
      : data.interests.filter(i => i !== interest);
    updateData({ interests: updated });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8 space-y-10 transition-all duration-500 ease-in-out animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-800">Your Preferences</h2>

      {/* Interests */}
      <div className="space-y-3">
        <label className="text-gray-700 font-medium block">What are your interests? *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((interest) => (
            <label
              key={interest}
              className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 hover:border-blue-400 transition duration-300 transform hover:scale-[1.02] cursor-pointer"
            >
              <input
                type="checkbox"
                checked={data.interests.includes(interest)}
                onChange={(e) => handleCheckboxChange(interest, e.target.checked)}
                className="accent-blue-600 w-4 h-4"
              />
              <span className="text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Contact Method */}
      <div className="space-y-3">
        <label className="text-gray-700 font-medium block">Preferred Contact Method *</label>
        <div className="space-y-3">
          {['Email', 'Phone', 'SMS'].map((method) => (
            <label
              key={method}
              className={`flex items-center space-x-3 p-3 rounded-xl border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out ${
                data.contactMethod === method ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-400'
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={data.contactMethod === method}
                onChange={() => updateData({ contactMethod: method })}
                className="accent-blue-600 w-4 h-4"
              />
              <span className="text-gray-700">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Newsletter Toggle */}
      <div className="flex items-center justify-between p-4 border rounded-xl transition duration-300 hover:shadow-md">
        <div>
          <label htmlFor="newsletter" className="text-gray-700 font-medium block mb-1">
            Subscribe to Newsletter
          </label>
          <p className="text-sm text-gray-500">Get updates and news delivered to your inbox</p>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={data.newsletter}
            onChange={(e) => updateData({ newsletter: e.target.checked })}
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300">
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
          </div>
        </label>
      </div>
      <button
  onClick={() => alert('Form submitted!')}
  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mt-4"
>
  Submit Preferences
</button>

    </div>
  );
};

export default PreferencesForm;
