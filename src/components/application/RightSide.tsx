"use client";
import { DetectionResults } from "@/types/objectDetection.type";
import { RefObject, useEffect, useState } from "react";
import Lottie from "react-lottie";
import concentratedLottie from "../../lotties/concentrated.json";
import distractedLottie from "../../lotties/distracted.json";
import phoneUsageLottie from "../../lotties/phone_usage.json";
import { GraphComponent } from "./GraphComponent";
import InformativesCards from "./InformativesCards";

const phoneUsageLottieOptions = {
  loop: true,
  autoplay: true,
  animationData: phoneUsageLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const concentratedLottieOptions = {
  loop: true,
  autoplay: true,
  animationData: concentratedLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const distractedLottieOptions = {
  loop: true,
  autoplay: true,
  animationData: distractedLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const RightSide = ({
  videoRef,
  sessionResults,
}: {
  videoRef: RefObject<HTMLVideoElement>;
  sessionResults: DetectionResults[];
}) => {
  const [lottieToShow, setLottieToShow] = useState("CONCENTRADO");

  useEffect(() => {
    handleStatusLottieFeedback(sessionResults);
  }, [sessionResults]);

  function handleStatusLottieFeedback(sessionResults: DetectionResults[]) {
    const lastThreeResults = sessionResults.slice(-3);
    const labels = lastThreeResults.map((result) => result.label);

    if (labels.every((label) => label === 0)) {
      setLottieToShow("CONCENTRADO");
    } else if (labels.includes(2)) {
      setLottieToShow("USO_TELEFONO");
    } else {
      setLottieToShow("DISTRAIDO");
    }
  }

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
      <div className="inline-flex gap-5 items-center">
        <div className={lottieToShow === "CONCENTRADO" ? "" : "hidden"}>
          <Lottie
            style={{ cursor: "auto" }}
            options={concentratedLottieOptions}
            height={200}
            width={200}
          />
        </div>
        <div className={lottieToShow === "DISTRAIDO" ? "" : "hidden"}>
          <Lottie
            style={{ cursor: "auto" }}
            options={distractedLottieOptions}
            height={200}
            width={200}
          />
        </div>
        <div className={lottieToShow === "USO_TELEFONO" ? "" : "hidden"}>
          <Lottie
            style={{ cursor: "auto" }}
            options={phoneUsageLottieOptions}
            height={200}
            width={200}
          />
        </div>

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
