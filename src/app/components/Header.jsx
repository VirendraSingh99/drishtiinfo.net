"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarWithCarousel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-red-500 shadow-md z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-4">
      
        {/* Logo */}
        <Link href="/" className="relative z-[61]">
          <div className="bg-white rounded-xl p-2 shadow-md">
            <Image src="/logo2.png" alt="Logo" width={50} height={50} />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-white font-medium relative z-[61]">
          <li>
            <Link href="/" className="hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="/softwere" className="hover:text-black">
              Softweres
            </Link>
          </li>
             <li>
            <Link href="/blogs" className="hover:text-black">
              Blogs
            </Link>
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex gap-3 lg:gap-4 relative z-[61]">
          <Link
            href="/contact"
            className="bg-white text-black px-3 lg:px-4 py-2 rounded-lg"
          >
            Contact Us
          </Link>
          <Link
            href="/demo"
            className="border border-white text-white px-3 lg:px-4 py-2 rounded-lg"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl relative z-[61]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-500 px-6 py-4 space-y-4 relative z-[61]">
          <Link
            href="/"
            className="block text-white "
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white "
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/softwere"
            className="block text-white "
            onClick={() => setIsOpen(false)}
          >
            Softweres
          </Link>
             <Link
            href="/blogs"
            className="block text-white "
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="block bg-white text-black px-4 py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/demo"
            className="block border border-white text-white px-4 py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Book Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
