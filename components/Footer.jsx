import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto text-center space-y-6">
        {/* Logo or Title */}
        <Link href='/' className="text-2xl lg:text-3xl font-bold px-4 py-1 rounded tracking-wide hover:tracking-wider">Vivid<span className="text-primary">Commerce</span></Link>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-6">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <Link href="https://facebook.com" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 hover:text-white"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54v-2.202c0-2.506 1.492-3.89 3.773-3.89 1.094 0 2.238.195 2.238.195v2.457h-1.26c-1.243 0-1.63.772-1.63 1.563v1.877h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 hover:text-white"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.973 9.973 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.917 4.917 0 00-8.381 4.482C7.69 7.74 4.066 5.827 1.64 2.905a4.93 4.93 0 001.523 6.573A4.897 4.897 0 01.96 8.69v.061a4.922 4.922 0 003.946 4.827 4.996 4.996 0 01-2.212.084 4.928 4.928 0 004.604 3.419 9.87 9.87 0 01-6.102 2.105c-.396 0-.79-.023-1.176-.069a13.94 13.94 0 007.557 2.212c9.054 0 14.002-7.498 14.002-14.002 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z" />
            </svg>
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 hover:text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.37 3.608 1.344.974.974 1.282 2.241 1.344 3.607.059 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.37 2.633-1.344 3.608-.974.974-2.241 1.282-3.607 1.344-1.267.059-1.647.07-4.851.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.37-3.608-1.344-.974-.974-1.282-2.241-1.344-3.607-.059-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.85c.062-1.366.37-2.633 1.344-3.608.974-.974 2.241-1.282 3.607-1.344 1.267-.059 1.647-.07 4.851-.07M12 0C8.741 0 8.332.013 7.052.07 5.766.127 4.53.423 3.508 1.445c-1.022 1.022-1.318 2.258-1.375 3.544C2.013 6.332 2 6.741 2 12s.013 5.668.07 6.948c.057 1.286.353 2.522 1.375 3.544 1.022 1.022 2.258 1.318 3.544 1.375C8.332 21.987 8.741 22 12 22s5.668-.013 6.948-.07c1.286-.057 2.522-.353 3.544-1.375 1.022-1.022 1.318-2.258 1.375-3.544.057-1.286.07-1.695.07-6.948s-.013-5.668-.07-6.948c-.057-1.286-.353-2.522-1.375-3.544C18.522.423 17.286.127 16 .07 14.668.013 14.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-8 3.999 3.999 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <Link href='/' className=" font-bold  rounded tracking-wide ">Vivid<span className="text-primary">Commerce</span></Link>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
