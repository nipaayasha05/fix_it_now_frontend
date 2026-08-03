"use client";

import React from "react";
import { Shield, HeartHandshake, Zap } from "lucide-react";

const OurValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description:
        "We connect you with verified professionals you can rely on for every home service.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description:
        "From booking to completion, we make every step simple, fast, and hassle-free.",
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      description:
        "Your satisfaction is our priority, and we're committed to delivering quality service every time.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          {/* <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
            Our Values
          </span> */}

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            The Principles Behind{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Every Service
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Our values guide every booking, every technician, and every customer
            experience at FixItNow.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-slate-800
                  bg-white
                  dark:bg-slate-950
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500
                  hover:shadow-xl
                  hover:shadow-blue-200/20
                  dark:hover:shadow-blue-900/20
                "
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" />

                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    dark:bg-blue-900/30
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>

                {/* Number */}
                <span className="absolute bottom-6 right-6 text-5xl font-bold text-slate-100 dark:text-slate-800">
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
