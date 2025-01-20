
import { AlignLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navLinks } from "@/utils/links"
import Link from "next/link"

export function NavDropdownMenu() {
  return (
    <DropdownMenu className='lg:hidden'>
      <DropdownMenuTrigger asChild>
      <Button variant='outline' size='icon' className='bg-muted'>
                  <AlignLeft />
                  <span className='sr-only'>Toggle links</span>
              </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Links</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/*  */}
        {navLinks.map((link) => {
          const { id, path, title, childs } = link

          if (childs) {
            return (
              <DropdownMenuSub key={id}>
                <DropdownMenuSubTrigger className='capitalize'>{title}</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                    {childs.map((child) => {
                      
                      return (
                        <DropdownMenuItem key={child.id} className='capitalize'>
                          <Link href={`/products?category=${title}`}>{child.title}</Link>
                        </DropdownMenuItem>
                  )
                })}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
            )
          }
                  return (
                      <DropdownMenuItem key={id}>
                          <Link href={path} className='flex items-center gap-x-2'>
                              <span className=' capitalize'>{title}</span>
                          </Link>
                      </DropdownMenuItem>
                  )
              })}
        {/*  */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
