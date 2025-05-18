"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-dark hover:text-primary p-2 rounded-full hover:bg-gray-light focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="메인 메뉴"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute w-full top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex flex-col p-4 gap-4">
              <Link
                href="/about"
                className={`text-base font-medium transition-colors block ${
                  pathname === "/about" ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/notice"
                className={`text-base font-medium transition-colors block ${
                  pathname.startsWith("/notice") ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
                onClick={toggleMenu}
              >
                공지사항
              </Link>
              <Link
                href="/updates"
                className={`text-base font-medium transition-colors block ${
                  pathname === "/updates" ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
                onClick={toggleMenu}
              >
                업데이트
              </Link>
            
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 