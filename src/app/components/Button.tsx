interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "outline";
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative font-medium rounded-full transition-all cursor-pointer";

  let variantStyles;
  switch (variant) {
    case "primary":
      variantStyles = "bg-moss-500 text-white hover:bg-moss-500/80";
      break;
    case "secondary":
      variantStyles = "bg-lighter-gray text-dark-gray hover:bg-lighter-gray/80";
      break;
  }

  let sizeStyles;
  switch (size) {
    case "md":
      sizeStyles = "px-[1.125rem] py-2.5 text-sm";
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles}`}
      {...props}
    >
      {children}
    </button>
  );
}
