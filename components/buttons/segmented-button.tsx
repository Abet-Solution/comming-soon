import React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"

const segmentedButtonVariants = cva(
  "inline-flex items-center font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "[&>*]:bg-primary [&>*]:text-primary-foreground [&>*]:shadow-xs hover:[&>*]:bg-primary/90",
        destructive:
          "[&>*]:bg-destructive [&>*]:text-white [&>*]:shadow-xs hover:[&>*]:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [&>*]:dark:bg-destructive/60",
        outline:
          "[&>*]:border [&>*]:bg-background [&>*]:shadow-xs hover:[&>*]:bg-primary/5 hover:[&>*]:text-accent-foreground [&>*]:dark:bg-input/30 [&>*]:dark:border-primary [&>*]:dark:hover:bg-input/50",
        secondary: "[&>*]:bg-secondary/80 [&>*]:text-secondary-foreground [&>*]:shadow-xs hover:[&>*]:bg-secondary/60",
        ghost: "hover:[&>*]:bg-primary/5 hover:[&>*]:text-accent-foreground [&>*]:dark:hover:bg-primary/5/50",
        link: "[&>*]:text-primary hover:[&>*]:underline [&>*]:underline-offset-4",
      },
      size: {
        default: "text-xs sm:text-sm",
        sm: "text-xs",
        lg: "text-sm md:text-base",
        xl: "text-sm md:text-lg",
        "2xl": "text-base md:text-xl",
      },
      iconPosition: {
        end: "gap-0 hover:gap-1 flex-row",
        start: "gap-0 hover:gap-1 flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: "end",
    },
  },
)

const textSectionVariants = cva("flex items-center justify-center transition-all rounded-full", {
  variants: {
    size: {
      default: "px-3 py-1.5 h-8 sm:px-4 sm:py-2 sm:h-9",
      sm: "px-2 py-1 h-7 sm:px-3 sm:py-1.5 sm:h-8",
      lg: "px-4 py-2 h-9 md:px-6 md:py-3 md:h-10",
      xl: "px-5 py-2.5 h-10 md:px-7 md:py-3.5 md:h-11",
      "2xl": "px-6 py-3 h-11 md:px-8 md:py-4 md:h-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

const iconSectionVariants = cva("flex items-center justify-center transition-all rounded-full", {
  variants: {
    size: {
      default: "w-8 h-8 sm:w-9 sm:h-9",
      sm: "w-7 h-7 sm:w-8 sm:h-8",
      lg: "w-9 h-9 md:w-10 md:h-10",
      xl: "w-10 h-10 md:w-11 md:h-11",
      "2xl": "w-11 h-11 md:w-12 md:h-12",
    },
    iconPosition: {
      end: "",
      start: "",
    },
  },
  defaultVariants: {
    size: "default",
    iconPosition: "end",
  },
})

export interface SegmentedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof segmentedButtonVariants> {
  icon: LucideIcon
  children: React.ReactNode
  iconPosition?: "start" | "end"
}

const SegmentedButton = React.forwardRef<HTMLButtonElement, SegmentedButtonProps>(
  ({ className, variant, size = "default", iconPosition = "end", icon: Icon, children, ...props }, ref) => {
    const getIconSize = () => {
      switch (size) {
        case "sm":
          return "h-3 w-3 sm:h-4 sm:w-4"
        case "default":
          return "h-3.5 w-3.5 sm:h-4 sm:w-4"
        case "lg":
          return "h-4 w-4 md:h-5 md:w-5"
        case "xl":
          return "h-5 w-5 md:h-6 md:w-6"
        case "2xl":
          return "h-6 w-6 md:h-7 md:w-7"
        default:
          return "h-4 w-4"
      }
    }

    return (
      <button
        className={cn(segmentedButtonVariants({ variant, size, iconPosition }), className, "cursor-pointer")}
        ref={ref}
        {...props}
      >
        <span className={cn(textSectionVariants({ size }))}>{children}</span>
        <span className={cn(iconSectionVariants({ size, iconPosition }))}>
          <Icon className={cn("transition-transform duration-200 ease-in-out", getIconSize())} />
        </span>
      </button>
    )
  },
)

SegmentedButton.displayName = "SegmentedButton"

export { SegmentedButton, segmentedButtonVariants }