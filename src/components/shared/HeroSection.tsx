"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.3),transparent_70%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-3xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
          ✨ Welcome to <span className="text-indigo-600">Bloggy</span>
        </h1>
        <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A space where ideas turn into stories. Write, explore, and inspire others
          with your words.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/create">
            <Button
              size="lg"
              className="rounded-2xl px-7 py-6 text-lg shadow-lg hover:scale-105 transition-transform"
            >
              ✍️ Start Writing
            </Button>
          </Link>
          <Link href="/blogs">
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl px-7 py-6 text-lg shadow-md hover:scale-105 transition-transform"
            >
              🔍 Explore Blogs
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;