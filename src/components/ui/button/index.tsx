import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick: () => void;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="btn btn-primary w-full" {...props}>
      {children}
    </button>
  );
};

export default Button;
