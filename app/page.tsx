import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Featured } from "@/components/Featured";
import { MenuSection } from "@/components/MenuSection";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B] text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Featured />
        <MenuSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}
