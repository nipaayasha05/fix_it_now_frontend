"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
      bg-blue-950
      dark:bg-slate-950
      text-white
      transition-colors
      border-t-2 border-blue-900 dark:border-slate-900 
      "
    >
      <div className="container mx-auto px-6 py-12">
        <div
          className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4 
          gap-10
          "
        >
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Fix
              <span className="text-orange-500">It</span>
              Now
            </h2>

            <p
              className="
              mt-4
              text-sm
              text-blue-100
              dark:text-gray-400
              leading-6
              "
            >
              Your trusted home service marketplace. Book skilled professionals
              for cleaning, repair, maintenance and more.
            </p>

            <div className="flex gap-4 mt-5">
              <FaFacebook
                className="
                w-5
                h-5
                cursor-pointer
                hover:text-orange-400
                transition
                "
              />

              <FaInstagram
                className="
                w-5
                h-5
                cursor-pointer
                hover:text-orange-400
                transition
                "
              />

              <FaTwitter
                className="
                w-5
                h-5
                cursor-pointer
                hover:text-orange-400
                transition
                "
              />

              <FaLinkedin
                className="
                w-5
                h-5
                cursor-pointer
                hover:text-orange-400
                transition
                "
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul
              className="
              space-y-3
              text-sm
              text-blue-100
              dark:text-gray-400
              "
            >
              <li>
                <Link className="hover:text-orange-400 transition" href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-orange-400 transition"
                  href="/services"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-orange-400 transition"
                  href="/technicians"
                >
                  Technicians
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-orange-400 transition"
                  href="/about"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-orange-400 transition"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>

            <ul
              className="
              space-y-3
              text-sm
              text-blue-100
              dark:text-gray-400
              "
            >
              <li>Home Cleaning</li>
              <li>Plumbing</li>
              <li>Electrical Repair</li>
              <li>AC Repair</li>
              <li>Appliance Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <div
              className="
              space-y-4
              text-sm
              text-blue-100
              dark:text-gray-400
              "
            >
              <div className="flex gap-3 items-center">
                <MapPin
                  className="
                  w-5
                  h-5
                  text-orange-400
                  "
                />

                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex gap-3 items-center">
                <Phone
                  className="
                  w-5
                  h-5
                  text-orange-400
                  "
                />

                <span>+880 1234-567890</span>
              </div>

              <div className="flex gap-3 items-center">
                <Mail
                  className="
                  w-5
                  h-5
                  text-orange-400
                  "
                />

                <span>support@fixitnow.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800 dark:border-slate-800">
        <div
          className="
          container
          mx-auto
          px-6
          py-5
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-3
          "
        >
          <p className="text-sm text-blue-200 dark:text-gray-400">
            © {new Date().getFullYear()} FixItNow. All rights reserved.
          </p>

          <div
            className="
            flex
            gap-5
            text-sm
            text-blue-200
            dark:text-gray-400
            "
          >
            <span className="hover:text-orange-400 cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-orange-400 cursor-pointer transition">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
