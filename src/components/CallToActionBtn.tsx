import Link from "next/link";
import React from "react";

const CallToActionBtn = () => {
  return (
    <Link
      href={"/application"}
      className="px-3 py-3 text-dark_white bg-primary whitespace-nowrap text-center hover:bg-opacity-85 transition-all duration-300 rounded-xl min-w-[100px] max-w-[100px] text-sm"
    >
      Comenzar
    </Link>
  );
};

export default CallToActionBtn;
