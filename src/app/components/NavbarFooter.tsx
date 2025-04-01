import Link from "next/link";
import React from "react";

function NavbarFooter() {
  return (
    <footer className="text-center mt-8">
      <p>
        &copy; 2025 &middot; Built with NextJs v15 &middot;
        <Link href={"/sitemap"} />
      </p>
    </footer>
  );
}

export default NavbarFooter;
