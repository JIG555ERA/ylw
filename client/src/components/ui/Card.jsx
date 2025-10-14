// components/ui/Card.jsx
import React from "react";
import clsx from "clsx";

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl border text-gray-900 border-gray-200 shadow-sm transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
