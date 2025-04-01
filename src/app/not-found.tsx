import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-6xl font-bold text-amber-700">404</h1>
      <p className="mt-4 text-2xl text-gray-800">Oops! Page not found.</p>
      <p className="mt-2 text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist
      </p>
      <Link
        href={"/"}
        className="mt-6 px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transform-3d"
      >
        Go back home
      </Link>
    </div>
  );
}

export default page;
