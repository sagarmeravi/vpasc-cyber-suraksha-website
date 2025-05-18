"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all relative overflow-hidden select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 active:shadow-inner active:scale-[0.98] after:absolute after:inset-0 after:bg-white after:opacity-0 hover:after:opacity-10 after:transition-opacity",
        secondary:
          "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-md hover:shadow-lg hover:from-gray-200 hover:to-gray-300 active:shadow-inner active:scale-[0.98] after:absolute after:inset-0 after:bg-black after:opacity-0 hover:after:opacity-5 after:transition-opacity",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 active:scale-[0.98]",
        ghost: "text-gray-700 hover:bg-gray-100 active:bg-gray-200 active:scale-[0.98]",
        link: "text-blue-600 underline-offset-4 hover:underline p-0 h-auto font-normal",
        danger:
          "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md hover:shadow-lg hover:from-red-700 hover:to-red-800 active:shadow-inner active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-3 text-sm rounded-lg",
        md: "h-10 px-5 text-sm rounded-lg",
        lg: "h-12 px-6 text-base rounded-xl",
        xl: "h-14 px-8 text-lg rounded-xl",
        icon: "h-10 w-10 rounded-full",
      },
      isLoading: {
        true: "cursor-not-allowed",
      },
    },
    compoundVariants: [
      {
        isLoading: true,
        variant: "default",
        className: "text-transparent",
      },
      {
        isLoading: true,
        variant: "secondary",
        className: "text-transparent",
      },
      {
        isLoading: true,
        variant: "outline",
        className: "text-transparent",
      },
      {
        isLoading: true,
        variant: "ghost",
        className: "text-transparent",
      },
      {
        isLoading: true,
        variant: "danger",
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
