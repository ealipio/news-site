import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 items-center p-10">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />

        <Link href="/" prefetch={false}>
          <h1 className="text-center font-serif text-4xl">
            The
            <span className="px-2 underline decoration-orange-400 decoration-4">
              Cod3a News
            </span>
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          {/* DarkModeButton */}
          <button className="hidden rounded-full bg-slate-900 px-4 py-2 text-white  dark:bg-slate-800 md:inline lg:px-8 lg:py-4">
            Subscribe Now
          </button>
        </div>
      </div>

      <NavLinks />

      <SearchBox />
    </header>
  );
}
