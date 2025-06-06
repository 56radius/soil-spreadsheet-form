import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface PersonalInfoStepProps {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  updateData: (data: any) => void;
}

export const PersonalInfoStep = ({ data, updateData }: PersonalInfoStepProps) => {
  const handleChange = (field: string, value: string) => {
    updateData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-slate-700 font-medium">
            First Name *
          </Label>
          <Input
            id="firstName"
            value={data.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className="border-slate-200 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 transition-all duration-200"
            placeholder="Enter your first name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-slate-700 font-medium">
            Last Name *
          </Label>
          <Input
            id="lastName"
            value={data.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className="border-slate-200 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 transition-all duration-200"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-700 font-medium">
          Email Address *
        </Label>
        <Input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="border-slate-200 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 transition-all duration-200"
          placeholder="Enter your email address"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-slate-700 font-medium">
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className="border-slate-200 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 transition-all duration-200"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
};