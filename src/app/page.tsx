import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32 bg-light_white">
      <div className="inline-flex flex-col gap-5 w-full justify-center items-center mb-20">
        <Hero />
        <HowItWorks />
      </div>
      <Footer />
    </main>
  );
}
