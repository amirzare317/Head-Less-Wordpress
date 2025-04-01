import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="mb-4">
      <h1 className="font-bold text-2xl mb-2">Hi, I am AmirHossein</h1>
      <p className="mb-4">
        A freelance web developer and content creator. I make a wide variety of
        educational contnt with a primary focus on website development and
        desing.
      </p>
      <Image
        src={"/hero.png"}
        width={700}
        height={192}
        quality={70}
        placeholder="blur"
        blurDataURL="/hero-placeholder.png"
        loading="eager"
        alt="Hero Image"
      />
    </div>
  );
}

export default Hero;
