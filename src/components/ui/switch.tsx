import { InputHTMLAttributes, forwardRef } from 'react';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="relative inline-block w-12 h-6">
        <input
          type="checkbox"
          ref={ref}
          {...props}
          className="opacity-0 w-0 h-0"
        />
        <span
          className={`absolute cursor-pointer inset-0 bg-slate-300 rounded-full transition duration-200 ${
            props.checked ? 'bg-blue-500' : ''
          }`}
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
              props.checked ? 'translate-x-6' : ''
            }`}
          ></span>
        </span>
      </label>
    );
  }
);

Switch.displayName = 'Switch';
