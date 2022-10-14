import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const UserOutline = ({ size = 24, ...props }: Props) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
};

export default UserOutline;
