"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShowHeader(true);
        setLastScrollY(window.scrollY);
        return;
      }
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full bg-white shadow-sm py-4 px-4 md:px-10 flex items-center justify-start md:justify-between min-h-[76px] fixed top-0 left-0 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center ml-0 md:ml-20">
        <Image
          src="/Supreme Group assets/supreme logo.png"
          alt="Supreme Group Logo"
          width={180}
          height={60}
          className="h-auto w-auto"
          priority
          sizes="180px"
        />
      </div>
    </header>
  );
} 