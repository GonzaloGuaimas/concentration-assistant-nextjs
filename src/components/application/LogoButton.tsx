import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoButton = () => {
  return (
    <div className="absolute bottom-10 right-10">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="hover:scale-105 transition-all duration-300 cursor-pointer bg-light_gray rounded-full shadow-xl"
        />
      </Link>
    </div>
  );
};

export default LogoButton;
