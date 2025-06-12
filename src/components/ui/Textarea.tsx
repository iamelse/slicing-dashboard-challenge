import React from "react"
import { cn } from "../../lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
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
Textarea.displayName = "Textarea"