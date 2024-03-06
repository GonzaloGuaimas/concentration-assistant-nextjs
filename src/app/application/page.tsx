"use client";
import LeftSide from "@/components/application/LeftSide";
import RightSide from "@/components/application/RightSide";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        (videoRef.current as any).srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  return (
    <main className="flex items-center justify-between w-full relative">
      <LeftSide startCamera={startCamera} />
      <RightSide videoRef={videoRef} />
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
      <div className="absolute top-10 right-10">
        <Link
          href="/"
          className="px-5 py-3 text-light_white font-semibold bg-primary rounded-2xl"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
