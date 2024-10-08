"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/home/Benefits";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-36 relative">
      <Navbar />
      <div className="inline-flex flex-col gap-5 w-full justify-center items-center mb-20">
        <Hero />
        <HowItWorks />
        <Benefits />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
