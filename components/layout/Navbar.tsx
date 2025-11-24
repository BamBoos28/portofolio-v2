"use client";

import Link from "next/link";
import { useState } from "react";
import { useHandleNavigation } from "@/components/hooks/handleNavigation";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavigation = useHandleNavigation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Project", href: "/project" },
    { label: "Skill", href: "/skill" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-30 bg-gray-200 border-b-4 border-gray-500 ">
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <div className="text-3xl font-bold font-header">
          <Link href="/" onClick={(e) => handleNavigation(e, "/")}>
            Wan Aziz
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={(e) => handleNavigation(e, href)}
                className="text-lg font-text text-gray-700 hover:font-header hover:uppercase transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>

          {/* Tooltip / Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg py-2">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={(e) => {
                    handleNavigation(e, href);
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
