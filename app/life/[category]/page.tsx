"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { lifeCategories } from "@/data/life";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function LifeCategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.category as string;
  
  const category = lifeCategories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-background text-white flex items-center justify-center">
        <p>Category not found</p>
      </div>
    );
  }

  return (
    <div className="bg-background text-neutral-300 font-inter antialiased selection:bg-pink-500/20 selection:text-white relative overflow-x-hidden min-h-screen">
      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <Navbar />

      <main className="w-full max-w-4xl mx-auto px-6 py-20 relative text-center md:text-left">
        {/* Back Button and Header */}
        <div className="mb-16">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 cursor-pointer mx-auto md:mx-0"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <Link href="/life" className="text-neutral-500 hover:text-white transition-colors">
              <span>Go back</span>
            </Link>
          </button>
          
          <h1 className="text-4xl md:text-5xl font-geist font-normal tracking-tight text-white mb-8 leading-tight">
            {category.heroTitle.line1} <br />
            <span className={category.colorClass}>{category.heroTitle.highlight1}</span>
            {category.heroTitle.midText && <span>{category.heroTitle.midText}</span>}
            {category.heroTitle.highlight2 && (
              <span className={category.colorClass}>{category.heroTitle.highlight2}</span>
            )}
          </h1>
          <p className="text-neutral-400 max-w-xl text-lg leading-relaxed mx-auto md:mx-0">
            {category.heroDescription}
          </p>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {category.items.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-neutral-900/40 border border-neutral-800/50 rounded-3xl overflow-hidden hover:border-neutral-700/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-geist font-semibold text-white mb-2">
                  {item.title}
                </h3>
                {(item.author || item.director || item.artist) && (
                  <p className="text-neutral-500 text-sm">
                    {item.author || item.director || item.artist}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Theme-matched Quote */}
        <div className="border-t border-neutral-800/50 pt-24 pb-12 flex flex-col items-center text-center">
          <div className={`w-12 h-[1px] ${category.colorClass.replace('text-', 'bg-')} mb-8`} />
          <blockquote className="max-w-2xl">
            <p className="text-2xl md:text-3xl font-geist italic text-neutral-300 mb-6">
              &quot;{category.quote.split(' — ')[0]}&quot;
            </p>
            {category.quote.includes(' — ') && (
              <footer className={`${category.colorClass} font-medium tracking-widest uppercase text-sm`}>
                — {category.quote.split(' — ')[1]}
              </footer>
            )}
          </blockquote>
        </div>

        <Contact />
        <Footer />
      </main>
    </div>
  );
}
