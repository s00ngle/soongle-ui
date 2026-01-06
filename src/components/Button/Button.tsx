import * as React from "react";
import { Text } from "../Text/Text";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantClasses = {
  default: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
};

const sizeClasses = {
  sm: "px-3 py-1.5",
  md: "px-4 py-2",
  lg: "px-6 py-3",
};

const textSizeMap = {
  sm: "sm" as const,
  md: "base" as const,
  lg: "lg" as const,
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", children, variant = "default", size = "md", ...props },
    ref
  ) => {
    const variantClass = variantClasses[variant];
    const sizeClass = sizeClasses[size];
    const textSize = textSizeMap[size];

    return (
      <button
        ref={ref}
        className={`cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClass} ${sizeClass} ${className}`}
        {...props}
      >
        <Text
          as="span"
          size={textSize}
          weight="medium"
          className="leading-none"
        >
          {children}
        </Text>
      </button>
    );
  }
);

Button.displayName = "Button";
