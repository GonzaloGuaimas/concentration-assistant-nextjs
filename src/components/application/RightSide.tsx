"use client";
import { RefObject } from "react";
import { GraphComponent } from "./GraphComponent";
import InformativesCards from "./InformativesCards";

const RightSide = ({ videoRef }: { videoRef: RefObject<HTMLVideoElement> }) => {
  return (
    <div className="inline-flex flex-col w-[60vw] min-h-screen items-center pt-10 px-20 text-center gap-5">
      {/* Header */}
      <div className="inline-flex flex-col gap-1 max-w-[40vw]">
        <h2 className="text-3xl font-bold text-primary">
          ¡Concentrate! 👀 tu tiempo vale oro 🏆
        </h2>
        <p className="text-dark_gray">
          Nuestra <strong>Inteligencia Artificial</strong> 🤖 te está
          observando. <strong>!Concentrate 🧠 en tus tareas!</strong>
        </p>
      </div>

      {/* Video Component */}
      <div className="inline-flex">
        <div className="inline-flex justify-center w-full items-center flex-col rounded-2xl p-1 bg-primary shadow-md">
          <div className="relative w-64 h-48 flex justify-center items-center rounded-2xl">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover transform scaleX(-1) rounded-2xl"
              autoPlay
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </div>
      </div>
      <InformativesCards />
      <GraphComponent />
    </div>
  );
};

export default RightSide;
