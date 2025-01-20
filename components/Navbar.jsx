import { navLinks } from "@/utils/links";
import Link from "next/link";
import React from "react";
import { CategoriesDropdown } from "./CategoriesDropdown";
import { ShoppingCart } from "lucide-react";
import { NavDropdownMenu } from "./NavDropdownMenu";
import { ThemToggle } from "./ThemeToggle";

export default function Navbar() {
    

  return (
    <nav className="w-full h-20 bg-card text-card-foreground shadow-md grid place-items-center dark:shadow-muted">
      <div className="container main-container flex items-center justify-between">
        {/* Logo */}
        <Link href='/' className="text-2xl lg:text-3xl font-bold px-4 py-1 rounded tracking-wide hover:tracking-wider">Vivid<span className="text-primary">Commerce</span></Link>

              <ul className="hidden lg:flex items-center gap-x-3 text-lg ">
                  {navLinks.map((link) => {
                      const { id, path, title, childs } = link

                      if (childs) {
                          return (
                             <CategoriesDropdown key={id} childs={childs} title={title} />
                          )
                      }
                      return (
                          <li key={id} className="">
                              <Link href={path} className="text-lg lg:text-xl capitalize text-card-foreground hover:text-primary tracking-wide px-3">{title}</Link>
                          </li>
                      )
                  })}
              </ul>
              
              <div className="flex items-center gap-x-4">
                  <Link href='/cart' className=" relative bg-muted p-1 rounded">
                      <ShoppingCart size={30} className=""/>
                      <span className="h-7 w-7 text-lg lg:text-xl font-semibold flex items-center justify-center bg-primary text-white rounded-full absolute top-[-12px] right-[-12px]">12</span>
          </Link>
          <ThemToggle />
          <div className="lg:hidden">
                  <NavDropdownMenu />
          </div>
        </div>
        
        
      </div>
    </nav>
  );
}
