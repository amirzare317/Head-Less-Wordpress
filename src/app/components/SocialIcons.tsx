import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialIconsArray = [
  {
    name: "X",
    url: "https://x.com/",
    image: "x.svg",
    alt: "Follow me on X",
  },
  {
    name: "Github",
    url: "https://github.com/",
    image: "github.svg",
    alt: "Follow me on Github!",
  },
];

function SocialIcons() {
  return (
    <div className="mb-4 flex justify-between">
      <h2 className="text-lg">Social Media</h2>
      <div className="flex gap-2">
        {SocialIconsArray.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-1
            rounded-md hover:scale-110 transition duration-300"
          >
            <Image
              key={item.alt}
              src={`/social-icon/${item.image}`}
              alt={item.alt}
              width={20}
              height={20}
              loading="eager"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SocialIcons;
