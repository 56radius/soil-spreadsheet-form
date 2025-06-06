import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Switch } from '../ui/switch';

interface PreferencesStepProps {
  data: {
    interests: string[];
    contactMethod: string;
    newsletter: boolean;
  };
  updateData: (data: any) => void;
}

export const PreferencesStep = ({ data, updateData }: PreferencesStepProps) => {
  const interests = ['Technology', 'Design', 'Business', 'Education', 'Health', 'Travel'];

  const handleInterestChange = (interest: string, checked: boolean) => {
    const newInterests = checked
      ? [...data.interests, interest]
      : data.interests.filter((i) => i !== interest);
    updateData({ interests: newInterests });
  };

  return (
    <div className="space-y-8">
      <div>
        <Label className="text-slate-700 font-medium text-base mb-4 block">
          What are your interests? *
        </Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((interest) => (
            <div
              key={interest}
              className="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
            >
              <Checkbox
                id={interest}
                checked={data.interests.includes(interest)}
          
              />
              <Label htmlFor={interest} className="text-slate-700 font-light cursor-pointer">
                {interest}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-slate-700 font-medium text-base mb-4 block">
          Preferred Contact Method *
        </Label>
        <RadioGroup
          value={data.contactMethod}
          onValueChange={(value) => updateData({ contactMethod: value })}
          className="space-y-3"
        >
          {['Email', 'Phone', 'SMS'].map((method) => (
            <div
              key={method}
              className="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
            >
              <RadioGroupItem value={method} id={method} />
              <Label htmlFor={method} className="text-slate-700 font-light cursor-pointer">
                {method}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200">
        <div>
          <Label htmlFor="newsletter" className="text-slate-700 font-medium cursor-pointer">
            Subscribe to Newsletter
          </Label>
          <p className="text-sm text-slate-500 font-light">
            Get updates and news delivered to your inbox
          </p>
        </div>
        <Switch
          id="newsletter"
          checked={data.newsletter}
         
        />
      </div>
    </div>
  );
};
