import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse bg-stone-300 dark:bg-[#2d2c2c] rounded-md ", className)} {...props} />);
}

export { Skeleton }
