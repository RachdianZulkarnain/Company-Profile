"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { lato } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";
import Image from "next/image";

const links = [
  { href: "/about", label: "ABOUT US" },
  { href: "/Services", label: "SERVICES" },
];

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!mobileMenuOpen) {
      const scrollingUp = latest < prevScrollY;
      const shouldShow = scrollingUp || latest < 50;
      setIsVisible(shouldShow);
      setHasScrolled(latest > 50);
    }
    setPrevScrollY(latest);
  });

  const navbarVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      <motion.nav
        key="navbar"
        variants={navbarVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="fixed top-0 left-0 right-0 bg-white z-50 py-4 px-6 md:px-10 shadow-md border-b"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/Logo.png" width={60} height={60} alt="Logo" />
            <span
              className={`text-xl font-bold text-gray-800 ${lato.className}`}
            >
              Microlab Studio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 relative">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-black font-semibold"
                    : "text-gray-500"
                } hover:text-black transition-colors`}
              >
                {link.label}
              </Link>
            ))}

            {/* BLOG dropdown (conditional) */}
            <div
              className="relative"
              onMouseEnter={() => setBlogDropdownOpen(true)}
              onMouseLeave={() => setBlogDropdownOpen(false)}
            >
              <Link
                href="/blog"
                className="text-gray-500 hover:text-black cursor-pointer font-medium"
              >
                BLOG
              </Link>
              <AnimatePresence>
                {blogDropdownOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute top-full mt-2 bg-white shadow-lg border rounded-md w-40 z-20"
                  >
                    {!user ? (
                      <>
                        <Link
                          href="/sign-in"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/sign-up"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Sign Up
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/write"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Write Blog
                        </Link>
                        <button
                          onClick={clearAuth}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                        >
                          Logout
                        </button>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <motion.button
            whileTap={{ rotate: 90, scale: 0.9 }}
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden bg-white border-t shadow-inner"
            >
              <div className="flex flex-col items-center space-y-4 p-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${
                      pathname === link.href
                        ? "text-black font-semibold"
                        : "text-gray-500"
                    } hover:text-black`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-2 text-gray-700 font-semibold">BLOG</div>
                {!user ? (
                  <>
                    <Link
                      href="/sign-in"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/sign-up"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/write"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Write
                    </Link>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        clearAuth();
                        setMobileMenuOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </AnimatePresence>
  );
};

export default Navbar;
