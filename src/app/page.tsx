"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import UseLoadModel from "@/hooks/UseLoadModel";

export default function Home() {
  UseLoadModel();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-36 relative">
      <Navbar />
      <div className="inline-flex flex-col gap-5 w-full justify-center items-center mb-20">
        <Hero />
        <HowItWorks />
      </div>
      <Footer />
    </main>
  );
}
