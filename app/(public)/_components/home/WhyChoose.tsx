"use client";

import React from "react";
import { ShieldCheck, Clock3, UsersRound, Wrench } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Professionals",
      description: "Verified technicians who provide reliable home services.",
    },
    {
      icon: Clock3,
      title: "Quick Response",
      description: "Book services easily and get help when you need it.",
    },
    {
      icon: UsersRound,
      title: "Skilled Technicians",
      description: "Experienced experts for all your home repair needs.",
    },
    {
      icon: Wrench,
      title: "Quality Service",
      description: "Professional solutions with customer satisfaction.",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-16 transition-colors">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="
            text-3xl 
            font-bold 
            text-gray-900 
            dark:text-white
            md:text-4xl
            "
          >
            Why Choose{" "}
            <span className="text-blue-600 dark:text-blue-400">FixItNow?</span>
          </h2>

          <p
            className="
            mt-4 
            text-gray-600
            dark:text-gray-400
            "
          >
            We connect you with trusted professionals to solve your home service
            problems quickly and easily.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                rounded-xl
                border
                border-gray-200
                dark:border-slate-800
                bg-white
                dark:bg-slate-900
                p-6
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-blue-200/40
                dark:hover:shadow-blue-900/40
                "
              >
                {/* Icon */}
                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-100
                  dark:bg-blue-900/40
                  "
                >
                  <Icon
                    className="
                    h-6
                    w-6
                    text-blue-600
                    dark:text-blue-400
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                  mt-5
                  text-lg
                  font-semibold
                  text-gray-900
                  dark:text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  mt-2
                  text-sm
                  text-gray-600
                  dark:text-gray-400
                  "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
