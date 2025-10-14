import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-lg border border-gray-300  bg-white  px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
}
