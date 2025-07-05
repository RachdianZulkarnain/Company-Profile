"use client";

import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import {
  PiInstagramLogo,
  PiTiktokLogo,
  PiYoutubeLogo
} from "react-icons/pi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");

  const mainLinks = [
    { name: "Home", href: "/projects" },
    { name: "Services", href: "/services" },

    { name: "Blog", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
      // Here you would typically make an API call to your backend
      setSubscriptionStatus("success");
      setEmail("microlab_std@email.com");
      setTimeout(() => setSubscriptionStatus(""), 3000);
    }
  };

  return (
    <footer className="py-10 md:py-16 md:mt-20 px-6 2xl:w-4/5 md:mx-auto md:px-16">
      <Separator className="mb-12" />
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* left side */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Let&apos;s Talk!</h2>
            <a
              href="mailto:hi@email.com"
              className="text-xl hover:underline inline-block mb-8"
            >
              microlab_std@email.com
            </a>
            <p className="text-gray-600">
              Margo street, Depok, Jawa Barat
              <br />
              Indonesia
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              {mainLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#7b7b7b] hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              {mainLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#7b7b7b] hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 
                  focus:ring-black focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-black
                   text-white px-4 py-2  hover:bg-gray-800 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
              {subscriptionStatus === "success" && (
                <p className="text-black text-sm">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className="flex flex-col md:flex-row 
        justify-between items-start md:items-center pt-8 border-t border-gray-200"
        >
          {/* Legal links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#7b7b7b] hover:underline text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#7b7b7b] hover:text-gray-900"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-[#7b7b7b] text-sm">© 2025 Micro Labs, Inc</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
