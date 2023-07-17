import { Category } from "@/types/categories";
import Link from "next/link";
import * as React from "react";

export interface INavLinkProps {
  category: Category;
  isActive: boolean;
}

export default function NavLink(props: INavLinkProps) {
  return (
    <Link
      className={`nav-link ${
        props.isActive &&
        "text-lg font-bold underline decoration-orange-400 underline-offset-4"
      }`}
      href={`news/${props.category}`}
    >
      {props.category}
    </Link>
  );
}
