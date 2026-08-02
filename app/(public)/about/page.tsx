import {
  CheckCircle,
  ShieldCheck,
  Wrench,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-sky-500 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">About FixItNow</h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-blue-100 dark:text-slate-300">
            Your trusted home service marketplace for finding verified
            technicians quickly, safely, and effortlessly.
          </p>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 mt-8 rounded-lg bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
          >
            Explore Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      {/* Story */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Story
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-8">
              Finding reliable home service professionals can be difficult.
              FixItNow was created to make the process simple. Whether you need
              an electrician, plumber, cleaner, painter, or appliance repair
              expert, our platform connects you with trusted technicians in just
              a few clicks.
            </p>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              We focus on quality, transparency, and customer satisfaction so
              every booking becomes a smooth and stress-free experience.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="space-y-6">
              <div className="flex gap-4">
                <ShieldCheck className="text-blue-600" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Verified Professionals
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Trusted technicians for every service.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-green-600" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Quality Service
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Customer satisfaction is our highest priority.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="text-orange-500" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Growing Community
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Connecting customers with skilled professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white dark:bg-slate-950 py-20">
        <div className="container mx-auto grid gap-8 px-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-2xl font-bold text-blue-700 dark:text-blue-400">
              Our Mission
            </h3>

            <p className="leading-7 text-slate-600 dark:text-slate-300">
              To simplify home service booking by connecting customers with
              trusted technicians through a fast, secure, and reliable platform.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-2xl font-bold text-blue-700 dark:text-blue-400">
              Our Vision
            </h3>

            <p className="leading-7 text-slate-600 dark:text-slate-300">
              To become the most trusted home service marketplace where quality,
              transparency, and customer satisfaction come first.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
          Why Choose FixItNow?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Verified Technicians",
            "Easy Online Booking",
            "Secure Payments",
            "24/7 Customer Support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-md transition hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900"
            >
              <Wrench
                className="mx-auto mb-4 text-blue-600 dark:text-blue-400"
                size={40}
              />

              <h3 className="font-semibold text-slate-900 dark:text-white">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-blue-700 dark:bg-gradient-to-r dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-14 text-center text-3xl font-bold">How It Works</h2>

          <div className="grid gap-8 text-center md:grid-cols-4">
            {[
              "Browse Services",
              "Choose Technician",
              "Book a Time Slot",
              "Get Your Service",
            ].map((step, index) => (
              <div key={step}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-bold shadow-lg">
                  {index + 1}
                </div>

                <h3 className="font-semibold text-white">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            ["500+", "Completed Services"],
            ["150+", "Professional Technicians"],
            ["98%", "Customer Satisfaction"],
            ["24/7", "Support"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-4xl font-bold text-blue-700 dark:text-blue-400">
                {number}
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-20 dark:bg-slate-950">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
              Contact Us
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Address
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Phone
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    +880 1234-567890
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Email
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    support@fixitnow.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Working Hours
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Sat - Thu | 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5 rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <button className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
