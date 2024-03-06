import Image from "next/image";
import Link from "next/link";
import React from "react";
import CallToActionBtn from "./CallToActionBtn";

const ButtonLink = ({ route, title }: { route: string; title: string }) => {
  return (
    <Link
      href={route}
      className="px-3 py-2 text-dark_gray hover:text-black text-center hover:bg-dark_white transition-all duration-300 rounded-xl min-w-[100px] max-w-[100px] text-sm"
    >
      {title}
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="inline-flex fixed top-5 w-full justify-center z-50">
      <div className="w-fit bg-white px-5 py-3 rounded-3xl inline-flex justify-center gap-5 items-center shadow-md  ">
        <ButtonLink route="/app" title="Features" />
        <ButtonLink route="/app" title="Beneficios" />
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="hover:scale-125 transition-all duration-300 cursor-pointer"
          />
        </Link>
        <ButtonLink route="/app" title="Contacto" />
        <CallToActionBtn />
      </div>
    </div>
  );
};

export default Navbar;
