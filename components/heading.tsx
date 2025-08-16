import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

const titleVariants = cva("font-bold tracking-tight", {
  variants: {
    size: {
      xs: "text-xl lg:text-lg md:text-base sm:text-sm text-xs",
      sm: "text-2xl lg:text-xl md:text-lg sm:text-base text-sm",
      md: "text-3xl lg:text-2xl md:text-xl sm:text-lg text-base",
      lg: "text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg",
      xl: "text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl",
      "2xl": "text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl",
      "3xl": "text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl",
      "4xl": "text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl",
      "5xl": "text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl",
      "6xl": "text-[10rem] lg:text-9xl md:text-8xl sm:text-7xl text-6xl",
      "7xl": "xl:text-[8rem] lg:text-[7rem] md:text-[6rem] sm:text-7xl text-5xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({
  className,
  size,
  as: Component = "h2",
  children,
  ...props
}: HeadingProps) => {
  return (
    <Component
      className={cn(
        titleVariants({ size }),
        
        "tracking-wider font-protest-strike text-primary",className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Heading, titleVariants };
