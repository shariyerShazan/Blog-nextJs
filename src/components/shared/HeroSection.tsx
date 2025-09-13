"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-6 md:px-12">
      {/* Background Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.3),transparent_70%)]"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-2xl mx-auto md:mx-0"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
            ✨ Welcome to <span className="text-indigo-600">Bloggy</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300">
            A space where ideas turn into stories. Write, explore, and inspire others
            with your words.
          </p>

          <div className="mt-8 flex flex-wrap md:justify-start justify-center gap-4">
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

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-indigo-600">1k+</h3>
              <p className="text-slate-700 dark:text-slate-300">Articles</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-indigo-600">50+</h3>
              <p className="text-slate-700 dark:text-slate-300">Writers</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-indigo-600">20k+</h3>
              <p className="text-slate-700 dark:text-slate-300">Readers</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
            alt="Blogging illustration"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;