"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
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
                href="/"
                className="text-gray-600 hover:text-primary text-base font-medium transition-colors block"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/notice"
                className="text-gray-600 hover:text-primary text-base font-medium transition-colors block"
                onClick={toggleMenu}
              >
                공지사항
              </Link>
              <Link
                href="/updates"
                className="text-gray-600 hover:text-primary text-base font-medium transition-colors block"
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