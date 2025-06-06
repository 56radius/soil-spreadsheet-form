import { Label } from "../ui/label"
import { Textarea } from '../ui/textarea';
import { Star } from 'lucide-react';

interface FeedbackStepProps {
  data: {
    experience: string;
    suggestions: string;
    rating: number;
  };
  updateData: (data: any) => void;
}

export const FeedbackStep = ({ data, updateData }: FeedbackStepProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="experience" className="text-slate-700 font-medium">
          How was your experience? *
        </Label>
        <Textarea
          id="experience"
          value={data.experience}
          onChange={(e) => updateData({ experience: e.target.value })}
          className="border-slate-200 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl min-h-24 transition-all duration-200 resize-none"
          placeholder="Tell us about your experience..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="suggestions" className="text-slate-700 font-medium">
          Any suggestions for improvement?
        </Label>
        <Textarea
          id="suggestions"
          value={data.suggestions}
          onChange={(e) => updateData({ suggestions: e.target.value })}
          className="border-slate-200 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl min-h-24 transition-all duration-200 resize-none"
          placeholder="Share your suggestions..."
        />
      </div>

      <div className="space-y-3">
        <Label className="text-slate-700 font-medium">
          Rate your overall experience *
        </Label>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => updateData({ rating: star })}
              className="transition-all duration-200 hover:scale-110"
            >
              <Star
                className={`w-8 h-8 ${
                  star <= data.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-slate-300 hover:text-yellow-300'
                }`}
              />
            </button>
          ))}
          {data.rating > 0 && (
            <span className="ml-3 text-slate-600 font-light">
              {data.rating} star{data.rating !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
