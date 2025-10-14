import React from "react";

function Button({ children, className = "", variant = "default", size = "md", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200";
  const variants = {
    default: "hover:shadow-lg",
    outline: "border border-gray-300  bg-transparent text-gray-700  hover:bg-gray-100 ",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button
