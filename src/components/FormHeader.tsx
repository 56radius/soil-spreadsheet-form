import { Sparkles } from 'lucide-react';

export const FormHeader = () => {
  return (
    <div className="text-center animate-fade-in">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
        <Sparkles className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-4xl font-light text-slate-800 mb-3 tracking-tight">
        Share Your Story
      </h1>
      <p className="text-lg text-slate-600 font-light leading-relaxed max-w-md mx-auto">
        Help us understand you better with this quick and easy form. Your information is safe with us.
      </p>
    </div>
  );
};
