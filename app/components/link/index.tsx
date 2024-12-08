import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { ComponentProps } from "react"

type LinkProps = ComponentProps<typeof Link>

export const LinkComponent = ({ className, children, ...props }:LinkProps) => {
    return (
        <Link 
        className={cn('flex items-center gap-2 text-gray-300 text-sm hover:text-green-500 transition-colors', className)}
        {...props}
        >
            {children}
        </Link>
    )
}