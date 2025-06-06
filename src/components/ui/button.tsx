// components/ui/button.tsx
export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="...">
      {children}
    </button>
  );
};
