import Link from "next/link";
import React from "react";

function NavbarHeader() {
  return (
    <header className="flex justify-between mb-[66px] items-center">
      <div className="font-bold text-2xl">
        <Link href={"/"}>Lite.</Link>
      </div>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/about"}>about</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarHeader;
