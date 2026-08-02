"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-blue-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto grid min-h-[90vh] items-center gap-10 px-5 py-16 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <span
            className="
            mb-4 inline-block rounded-full 
            bg-blue-100 px-4 py-2 
            text-sm font-medium text-blue-600
            dark:bg-blue-900/40 dark:text-blue-300
            "
          >
            🔧 Trusted Home Service Platform
          </span>

          <h1
            className="
            text-4xl font-bold leading-tight 
            text-gray-900 md:text-6xl
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

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services">
              <Button
                className="
                bg-orange-500 px-6 py-6 
                text-white 
                hover:bg-orange-600
                "
              >
                Find Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          {/* 
          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                500+
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Expert Technicians
              </p>
            </div>
          </div>
          */}
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div
            className="
            absolute -right-10 -top-10 
            h-72 w-72 rounded-full 
            bg-blue-200 blur-3xl
            dark:bg-blue-700/40
            "
          />

          <Image
            src="/hero-2.jpg"
            alt="Home service technician"
            width={600}
            height={600}
            className="
            relative z-10 
            rounded-2xl object-cover
            shadow-xl
            "
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
