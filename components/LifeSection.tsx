"use client";

import { BookText, ChevronRight, Clapperboard, Music, Tv2 } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "books",
    title: "Books",
    description: "Books that have influenced my thinking and growth.",
    icon: BookText,
    href: "/life/books",
    color: "group-hover:text-blue-400",
  },
  {
    id: "movies",
    title: "Movies",
    description: "Movies and shows that have inspired and entertained me.",
    icon: Clapperboard,
    href: "/life/movies",
    color: "group-hover:text-red-400",
  },
  {
    id: "anime",
    title: "Anime",
    description: "The masterpieces that take me to another world.",
    icon: Tv2,
    href: "/life/anime",
    color: "group-hover:text-purple-400",
  },
  {
    id: "music",
    title: "Music",
    description: "The soundtrack to my coding sessions.",
    icon: Music,
    href: "/life/music",
    color: "group-hover:text-pink-400",
  },
];

export default function LifeSection() {
  return (
    <section className="mt-24">
      <div className="mb-8">
        <h2 className="text-3xl font-geist font-light tracking-tight text-white mb-12">
          Personal Life
        </h2>
       
      </div>

      <div className="grid grid-cols-1 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group flex items-center justify-between p-6 bg-neutral-900/40 border border-neutral-800/50 rounded-2xl hover:bg-neutral-800/40 transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 bg-neutral-800/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <category.icon className={`w-6 h-6 text-neutral-400 ${category.color}`} />
              </div>
              <div>
                <h3 className="text-xl font-geist font-light text-white mb-1">
                  {category.title}
                </h3>
                <p className="text-neutral-500 text-sm">{category.description}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </section>
  );
}
