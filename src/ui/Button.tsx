import React from "react"

type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {

  const baseStyle =
    "rounded-lg font-medium transition flex items-center justify-center"

  const variants = {
    primary: "bg-gradient-primary text-white",
    secondary: "bg-primary text-white",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
  }

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button