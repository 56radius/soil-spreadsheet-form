import { LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ className, ...props }: LabelProps) => {
  return (
    <label
      {...props}
      className={`block text-sm font-medium ${className || ''}`}
    />
  );
};
