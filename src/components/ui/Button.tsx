import React from "react"
import { cn } from "../../lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "ghost" | "outline"
    size?: "default" | "sm" | "lg" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                    {
                        "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
                        "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
                        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
                        "border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
                    },
                    {
                        "h-10 py-2 px-4": size === "default",
                        "h-9 px-3 rounded-md": size === "sm",
                        "h-11 px-8 rounded-md": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    className,
                )}
                ref={ref}
                {...props}
            />
        )
    },
)

Button.displayName = "Button"