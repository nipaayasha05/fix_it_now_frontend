"use client";

import React from "react";
import {
  Search,
  UserCheck,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find a Service",
    description:
      "Search for the service you need and explore trusted professionals available in your area.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Choose a Technician",
    description:
      "Compare technicians by experience, ratings, reviews, and service details before choosing.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Book a Service",
    description:
      "Select a convenient date and available time slot, then confirm your booking easily.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Get It Fixed",
    description:
      "Your selected technician arrives at the scheduled time and gets the job done professionally.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-950">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Simple & Convenient
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            How{" "}
            <span className="text-blue-600 dark:text-blue-400">FixItNow</span>{" "}
            Works
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
            Getting reliable home services has never been easier. Just follow
            four simple steps and get your problem fixed by a trusted
            professional.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting Line */}
          <div className="absolute left-[12%] right-[12%] top-16 hidden h-px bg-slate-200 lg:block dark:bg-slate-800" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                {/* Card */}
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900">
                  {/* Icon */}
                  <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-primary dark:bg-blue-950/50 dark:group-hover:bg-blue-600">
                    <Icon className="h-9 w-9 text-primary transition-colors duration-300 group-hover:text-white dark:text-blue-400 dark:group-hover:text-white" />

                    {/* Step Number */}
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-orange-500 text-xs font-bold text-white dark:border-slate-900">
                      {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>

                  {/* Step Label */}
                  <div className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600">
                    Step {step.number}
                  </div>
                </div>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <div className="absolute -right-5 top-14 z-10 hidden lg:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-7 sm:flex-row sm:px-10 dark:border-blue-900/40 dark:bg-blue-950/30">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Ready to get your problem fixed?
            </h3>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Find a trusted professional and book your service today.
            </p>
          </div>

          <Link href="/services">
            <button className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
              Find a Service
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
