import { Button } from '../components/ui/button';
import { CheckCircle, Download, RotateCcw } from 'lucide-react';

interface FormCompleteProps {
  onReset: () => void;
}

export const FormComplete = ({ onReset }: FormCompleteProps) => {
  const downloadData = () => {
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    const csvContent = generateCSV(submissions);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-submissions.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const generateCSV = (data: any[]) => {
    if (data.length === 0) return '';
    
    const headers = [
      'Timestamp', 'First Name', 'Last Name', 'Email', 'Phone',
      'Interests', 'Contact Method', 'Newsletter', 'Experience', 'Suggestions', 'Rating'
    ];
    
    const rows = data.map(item => [
      item.timestamp,
      item.personalInfo.firstName,
      item.personalInfo.lastName,
      item.personalInfo.email,
      item.personalInfo.phone,
      item.preferences.interests.join('; '),
      item.preferences.contactMethod,
      item.preferences.newsletter ? 'Yes' : 'No',
      item.feedback.experience,
      item.feedback.suggestions,
      item.feedback.rating
    ]);
    
    return [headers, ...rows].map(row => row.map(field => `"${field}"`).join(',')).join('\n');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="animate-scale-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 shadow-xl">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-light text-slate-800 mb-4">
            Thank You!
          </h1>
          
          <p className="text-lg text-slate-600 font-light mb-8 leading-relaxed">
            Your form has been submitted successfully. We appreciate you taking the time to share your information with us.
          </p>

          <div className="space-y-4">
            <Button
              onClick={downloadData}
              variant="outline"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span className="font-light">Download Submissions (CSV)</span>
            </Button>
            
            <Button
              onClick={onReset}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="font-light">Submit Another Response</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};