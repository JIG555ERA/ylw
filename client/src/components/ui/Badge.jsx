// components/ui/badge.jsx
import clsx from "clsx";

function Badge({ children, className, variant = "default", ...props }) {
  const base =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors";

  const variants = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100",
    outline:
      "border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100",
  };

  return (
    <span className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}

export default Badge
