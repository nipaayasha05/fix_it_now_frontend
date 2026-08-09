"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/hero-2.jpg",
    title: "Professional Home Services",
  },
  {
    image: "/fixit4.jpg",
    title: "Trusted Technicians",
  },
  {
    image: "/fixit3.jpg",
    title: "Fast & Reliable Service",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="
     relative flex min-h-[60vh] items-center
     overflow-hidden bg-white py-12
     dark:bg-slate-950
     md:min-h-[65vh]
   "
    >
      {" "}
      <div
        className="
       mx-auto grid w-full max-w-7xl
       items-center gap-10 px-6
       lg:grid-cols-2 lg:pb-5 md:pb-5
     "
      >
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {" "}
          <p
            className="
           mb-4 text-sm font-semibold uppercase
           tracking-wider text-blue-600
           dark:text-blue-400
         "
          >
            Trusted Home Service Platform{" "}
          </p>
          <h1
            className="
          text-4xl font-bold leading-tight
          text-gray-900
          md:text-6xl
          dark:text-white
        "
          >
            Fix Your Home Problems{" "}
            <span className="text-blue-600 dark:text-blue-400">
              With Trusted Experts
            </span>
          </h1>
          <p
            className="
          mt-6 max-w-lg text-lg
          text-gray-600
          dark:text-gray-300
        "
          >
            Find skilled technicians for plumbing, electrical, cleaning, and
            other home services. Book reliable professionals anytime, anywhere.
          </p>
          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services">
              <Button
                className="
              bg-orange-500 px-6 py-6 text-white
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-orange-600
              hover:shadow-lg
            "
              >
                Find Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT SLIDER ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="relative"
        >
          {/* Background Glow */}
          <div
            className="
          absolute -right-10 -top-10
          h-72 w-72 rounded-full
          bg-blue-200 blur-3xl
          dark:bg-blue-700/30
        "
          />

          {/* Slider Container */}
          <div
            className="
          relative z-10 overflow-hidden
          rounded-2xl shadow-2xl
        "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{
                  opacity: 0,
                  scale: 1.05,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  width={600}
                  height={600}
                  priority={currentSlide === 0}
                  className="
                h-[320px] w-full object-cover
                md:h-[420px]
              "
                />
              </motion.div>
            </AnimatePresence>

            {/* Image Overlay */}
            <div
              className="
            absolute inset-x-0 bottom-0
            bg-gradient-to-t
            from-black/70
            to-transparent
            p-6
          "
            >
              <p
                className="
              text-lg font-semibold
              text-white
            "
              >
                {slides[currentSlide].title}
              </p>
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="
            absolute left-4 top-1/2
            flex h-10 w-10
            -translate-y-1/2
            items-center justify-center
            rounded-full
            bg-white/80
            text-slate-800
            shadow-md
            transition
            hover:bg-white
          "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="
            absolute right-4 top-1/2
            flex h-10 w-10
            -translate-y-1/2
            items-center justify-center
            rounded-full
            bg-white/80
            text-slate-800
            shadow-md
            transition
            hover:bg-white
          "
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Slider Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
              h-2.5 rounded-full
              transition-all duration-300
              ${
                currentSlide === index
                  ? "w-8 bg-blue-600"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700"
              }
            `}
              />
            ))}
          </div>
        </motion.div>
      </div>
      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
    absolute bottom-5 left-1/2
    hidden -translate-x-1/2
    md:flex
    items-center gap-2
    rounded-full
    border border-slate-200
    bg-white/80
    px-4 py-2
    text-sm font-medium
    text-slate-500
    shadow-sm
    backdrop-blur-sm
    dark:border-slate-700
    dark:bg-slate-900/80
    dark:text-slate-400
  "
      >
        <span>More to Explore</span>

        <ArrowDown
          className="
      h-4 w-4
      text-blue-600
      dark:text-blue-400
    "
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
