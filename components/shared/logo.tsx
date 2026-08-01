import React from "react";

import Image from "next/image";
import Link from "next/link";
export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1 shrink-0">
      <div className="">
        <Image
          src="/fixItNow1.png"
          alt="Light Logo"
          width={60}
          height={55}
          className="block dark:hidden h-16 w-16 object-contain"
        />

        <Image
          src="/fixDarkOrange2.png"
          alt="Dark Logo"
          width={60}
          height={55}
          className="hidden dark:block h-16 w-16 object-contain"
        />
      </div>

      <h1 className="text-2xl font-extrabold tracking-tight">
        <span className="text-slate-900 dark:text-white">Fix</span>
        <span className="text-blue-600 dark:text-blue-400">It</span>
        <span className="text-orange-500 dark:text-orange-400  ">Now</span>
      </h1>
    </Link>
  );
};

export default Logo;
