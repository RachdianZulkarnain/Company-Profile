"use client";

import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import { PiInstagramLogo, PiTiktokLogo, PiYoutubeLogo } from "react-icons/pi";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Sitemap", href: "#" },
  ];

  const socialLinks = [
    { icon: PiYoutubeLogo, href: "https://www.youtube.com/@microlab_studio" },
    {
      icon: PiInstagramLogo,
      href: "https://www.instagram.com/microlab_studio",
    },
    { icon: PiTiktokLogo, href: "https://www.tiktok.com/@microlab_studio" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscriptionStatus("success");
      setEmail("microlab_std@email.com");
      setTimeout(() => setSubscriptionStatus(""), 3000);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      <footer className="bg-white px-4 sm:px-6 lg:px-8 py-10 md:py-16 mt-10">
        <div className="max-w-screen-xl mx-auto">
          <Separator className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Let&apos;s Talk!</h2>
              <a
                href="mailto:hi@email.com"
                className="text-lg text-gray-800 hover:underline block mb-4"
              >
                microlab_std@email.com
              </a>
              <p className="text-gray-600 text-sm leading-relaxed">
                Margo Street, Depok, Jawa Barat
                <br />
                Indonesia
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                {mainLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-600 hover:underline block"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Subscribe to our newsletter
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
                {subscriptionStatus === "success" && (
                  <p className="text-sm text-green-600">
                    Thanks for subscribing!
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-gray-500">
            {/* Legal */}
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:underline">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors"
                    aria-label={`Buka ${link.href} di tab baru`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right w-full sm:w-auto">
              © 2025 Micro Labs, Inc.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
