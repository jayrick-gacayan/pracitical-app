import { cn } from "@/utils/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, forwardRef, ForwardedRef } from "react"

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-300/70",
        destructive:
          "bg-destructive text-slate-500 hover:bg-destructive/90",
        outline: "border border-blue-500 bg-slate-100",
        secondary: "bg-gray-700",
        ghost: "bg-slate-300",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  ({ className, variant, size, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>) => {

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
);

export default Button;