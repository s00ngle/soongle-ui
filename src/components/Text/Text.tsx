import * as React from "react";

export interface TextProps {
  children?: React.ReactNode;
  as?: "p" | "span" | "div" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  color?: "default" | "muted" | "primary" | "secondary" | "danger" | "success";
  align?: "left" | "center" | "right";
  className?: string;
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const weightClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const colorClasses = {
  default: "text-gray-900",
  muted: "text-gray-500",
  primary: "text-blue-600",
  secondary: "text-green-600",
  danger: "text-red-600",
  success: "text-emerald-600",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      as: Component = "p",
      size = "base",
      weight = "normal",
      color = "default",
      align = "left",
      className = "",
      ...props
    },
    ref
  ) => {
    const classes = [
      sizeClasses[size],
      weightClasses[weight],
      colorClasses[color],
      alignClasses[align],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component ref={ref as any} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";
