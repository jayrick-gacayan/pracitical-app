import { cn } from "@/utils/utils";
import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { }
const Select = forwardRef<
  HTMLSelectElement,
  SelectProps
>(
  ({ className, ...props }: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
      <div className="relative flex">
        <select
          className={cn(
            "h-10 w-full appearance-none truncate rounded border py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <span className="absolute right-2">&#8964;</span>
      </div>
    );
  }
);

export default Select;