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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-dark hover:text-primary p-2 rounded-full hover:bg-gray-light focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="메인 메뉴"
          >
           {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-4 sm:left-6 lg:left-8 w-64 bg-white shadow-lg rounded-lg border z-50">
            <div className="flex flex-col py-2">
              <Link
                href="/timeline"
                className={`px-4 py-3 text-sm sm:text-base lg:text-lg font-medium transition-colors hover:bg-gray-light ${
                  pathname === "/timeline" ? "text-primary" : "text-gray-dark hover:text-primary"
                }`}
                onClick={toggleMenu}
              >
                Timeline
              </Link>
              <Link
                href="/about"
                className={`px-4 py-3 text-sm sm:text-base lg:text-lg font-medium transition-colors hover:bg-gray-light ${
                  pathname === "/about" ? "text-primary" : "text-gray-dark hover:text-primary"
                }`}
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/notice"
                className={`px-4 py-3 text-sm sm:text-base lg:text-lg font-medium transition-colors hover:bg-gray-light ${
                  pathname.startsWith("/notice") ? "text-primary" : "text-gray-dark hover:text-primary"
                }`}
                onClick={toggleMenu}
              >
                공지사항
              </Link>
              <Link
                href="/updates"
                className={`px-4 py-3 text-sm sm:text-base lg:text-lg font-medium transition-colors hover:bg-gray-light ${
                  pathname === "/updates" ? "text-primary" : "text-gray-dark hover:text-primary"
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