"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 active:bg-gray-100 shadow-sm",
        primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm",
        outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100",
        ghost: "text-gray-700 hover:bg-gray-100 active:bg-gray-200",
        link: "text-blue-600 underline-offset-4 hover:underline p-0 h-auto font-normal",
        danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm",
      },
      size: {
        sm: "h-9 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-sm rounded-md",
        lg: "h-11 px-6 text-base rounded-md",
        xl: "h-12 px-8 text-base rounded-md",
        icon: "h-10 w-10 rounded-md",
      },
      isLoading: {
        true: "cursor-not-allowed",
      },
    },
    compoundVariants: [
      {
        isLoading: true,
        className: "text-transparent",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      isLoading: false,
    },
  },
)

const Button = React.forwardRef(
  ({ className, variant, size, isLoading = false, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, isLoading, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {children}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        )}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
