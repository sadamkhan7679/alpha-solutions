import React from "react";

type LogoButtonProps = {
  clickable?: boolean;
};

const LogoButton: React.FC<LogoButtonProps> = ({ clickable = true }) => {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
      aria-label="logo"
    >
      <svg
        width="95"
        height="94"
        viewBox="0 0 95 94"
        className="h-auto w-6 text-indigo-500"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
      </svg>
      RazmiSoft
    </a>
  );
};

export default LogoButton;
