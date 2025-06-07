import React from 'react';

const PreferencesForm = ({ data, updateData }) => {
  const interests = ['Technology', 'Design', 'Business', 'Education', 'Health', 'Travel'];

  const handleInterestChange = (interest, checked) => {
    const newInterests = checked
      ? [...data.interests, interest]
      : data.interests.filter((i) => i !== interest);
    updateData({ interests: newInterests });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-xl animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Preferences</h2>

      <label className="block mb-2 text-gray-700 font-medium">Interests</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {interests.map((interest) => (
          <label
            key={interest}
            className={`cursor-pointer flex items-center gap-2 p-3 border rounded-xl hover:border-blue-300 transition-colors ${
              data.interests.includes(interest) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
          >
            <input
              type="checkbox"
              checked={data.interests.includes(interest)}
              onChange={(e) => handleInterestChange(interest, e.target.checked)}
            />
            <span className="text-gray-700">{interest}</span>
          </label>
        ))}
      </div>

      <label className="block mb-2 text-gray-700 font-medium">Preferred Contact Method</label>
      <div className="flex flex-col gap-3 mb-6">
        {['Email', 'Phone', 'SMS'].map((method) => (
          <label
            key={method}
            className={`cursor-pointer flex items-center gap-2 p-3 border rounded-xl hover:border-blue-300 transition-colors ${
              data.contactMethod === method ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
          >
            <input
              type="radio"
              name="contactMethod"
              value={method}
              checked={data.contactMethod === method}
              onChange={(e) => updateData({ contactMethod: e.target.value })}
            />
            <span className="text-gray-700">{method}</span>
          </label>
        ))}
      </div>

      <div className="flex items-center justify-between p-4 border rounded-xl mb-6">
        <div>
          <label className="text-gray-700 font-medium">Subscribe to Newsletter</label>
          <p className="text-sm text-gray-500">Get updates and news delivered to your inbox</p>
        </div>
        <input
          type="checkbox"
          className="w-5 h-5"
          checked={data.newsletter}
          onChange={(e) => updateData({ newsletter: e.target.checked })}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
      >
        Submit
      </button>
    </div>
  );
};

export default PreferencesForm;
