import { ChevronsDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function CategoriesDropdown({title, childs}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
              <Button className='bg-transparent text-card-foreground text-lg lg:text-xl capitalize hover:text-primary hover:bg-transparent tracking-wide px-3 focus:outline-none' >{title} <ChevronsDown  /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-[99]">
        <DropdownMenuLabel className='text-lg'>Categories:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {childs.map((link) => {
            const { id, title } = link
            return (
              <DropdownMenuItem key={id}>
              <Link href={`/products?category=${title}`} className=" capitalize text-lg">
                {title}
              </Link>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={'/products'} className=" capitalize text-lg">
          See all categories
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
