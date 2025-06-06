import { ReactNode } from 'react';

interface RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
  className?: string;
}

export const RadioGroup = ({ value, onValueChange, children, className = '' }: RadioGroupProps) => {
  return (
    <div role="radiogroup" className={className}>
      {children}
    </div>
  );
};

interface RadioGroupItemProps {
  value: string;
  id: string;
  className?: string;
}

export const RadioGroupItem = ({ value, id, className }: RadioGroupItemProps) => (
  <input
    type="radio"
    id={id}
    name="radio-group"
    value={value}
    className={`w-5 h-5 accent-blue-500 ${className || ''}`}
  />
);
