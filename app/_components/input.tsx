import { cn } from "@/utils/utils";
import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((
  { className, type, ...props }: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      type={type}
      className={
        cn(
          "flex h-10 w-full rounded border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )
      }
      ref={ref}
      {...props}
    />
  );
})

export default Input;