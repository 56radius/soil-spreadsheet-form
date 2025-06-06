import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        {...props}
        className={`w-5 h-5 accent-blue-500 ${className || ''}`}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';
