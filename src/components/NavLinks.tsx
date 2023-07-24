"use client";

import { usePathname } from "next/navigation";
import { categories } from "@/constants/categories";
import React from "react";

import NavLink from "./NavLink";

type Props = {};

export default function NavLinks({}: Props) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname?.split("/")?.at(-1) === path;

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-4 gap-4 border-b pb-10 text-xs md:grid-cols-7 md:text-sm">
      {categories.map((category, index) => (
        <NavLink
          key={index}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </div>
  );
}
