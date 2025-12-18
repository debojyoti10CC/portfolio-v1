"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LifeSection from "@/components/LifeSection";
import Navbar from "@/components/Navbar";

export default function LifePage() {
  return (
    <div className="bg-background text-neutral-300 font-inter antialiased selection:bg-pink-500/20 selection:text-white relative overflow-x-hidden min-h-screen">
      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <Navbar />

      <main className="w-full max-w-6xl mx-auto px-6 py-20 relative">
        <LifeSection />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
