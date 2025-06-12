import React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                "placeholder:text-muted-foreground",
                "focus:outline-none focus:bg-black focus:text-white placeholder:focus:text-white",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "transition-colors duration-200 ease-in-out",
                className,
            )}
            ref={ref}
            {...props}
        />
    )
})
Input.displayName = "Input"