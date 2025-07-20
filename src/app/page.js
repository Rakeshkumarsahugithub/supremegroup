"use client";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import { useRef } from "react";
import Footer from "../components/Footer";
import PerformanceHero from "../components/PerformanceHero";
import VehicleShowcase from "../components/VehicleShowcase";

export default function Home() {
  const blueSectionRef = useRef(null);
  return (
    <main className="min-h-screen w-full bg-white dark:bg-black">
      <Header />
      <PerformanceHero />
      <VehicleShowcase blueSectionRef={blueSectionRef} />
      <Contact ref={blueSectionRef} />
      <Footer />
    </main>
  );
}
