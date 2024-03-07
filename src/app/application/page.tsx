"use client";
import LeftSide from "@/components/application/LeftSide";
import LogoButton from "@/components/application/LogoButton";
import RightSide from "@/components/application/RightSide";
import { ClockStatusEnum } from "@/types/enums";
import { DetectionResults } from "@/types/objectDetection.type";
import { detectImage } from "@/utils/model/model-detect";
import { resultTransform } from "@/utils/model/model-results";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { sessionModelState } from "@/atoms/sessionModelState";
import { useRouter } from "next/navigation";
import UseChartData from "@/hooks/UseChartData";
import example_data from "../../utils/example_data.json";
import { currentSessionState } from "@/atoms/currentSessionState";

export default function Home() {
  const router = useRouter();
  const videoRef = useRef(null);
  const [stream, setStream] = useState<any>(null);
  const canvasRef = useRef<any>(null);
  const [sessionResults, setSessionResults] = useState<DetectionResults[]>([]);
  const [session] = useRecoilState(sessionModelState);
  UseChartData(sessionResults);
  const [currentSession, setCurrentSession] =
    useRecoilState(currentSessionState);

  useEffect(() => {
    if (!session) router.replace("/");
    else console.log("Model is downloaded");
  }, [session]);

  useEffect(() => {
    if (stream) {
      startApp(), startClock();
    }
  }, [stream]);

  useEffect(() => {
    statusManager(currentSession.status);
  }, [currentSession.status]);

  function statusManager(status: ClockStatusEnum): void {
    switch (status) {
      case ClockStatusEnum.RUNNING:
        startCamera();
        break;
      case ClockStatusEnum.STOPPED:
        break;

      default:
        break;
    }
  }

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        (videoRef.current as any).srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  function startApp() {
    setCurrentSession((prev) => ({ ...prev, status: ClockStatusEnum.RUNNING }));
    const intervalId = setInterval(() => {
      console.log("capturing");
      captureAndDetectCurrentVideo();
    }, 5000);

    return () => clearInterval(intervalId);
  }
  function startClock() {
    const intervalId = setInterval(() => {
      setCurrentSession((prev) => ({ ...prev, time: prev.time + 1 }));
    }, 1000);

    return () => clearInterval(intervalId);
  }

  const captureAndDetectCurrentVideo = async () => {
    if (!stream || !videoRef.current) return;
    const { videoWidth, videoHeight } = videoRef.current;
    if (!videoWidth || !videoHeight) return;
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = videoWidth;
      canvas.height = videoHeight;

      const context = canvas.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

      const img = new Image();
      img.src = canvas.toDataURL("image/jpeg");
      console.log("results");
      const result = await detectImage(img, session);
      const resultTransformed = resultTransform(result);
      console.log(
        `label: ${resultTransformed[0].label} | ${resultTransformed[0].confidence}`
      );
      // setDetectionResult(resultTransformed);
      setSessionResults((prev: any) => [...prev, result[0]]);

      URL.revokeObjectURL(img.src);
    }
  };

  return (
    <main className="flex items-center justify-between w-full relative">
      <LeftSide />
      <RightSide videoRef={videoRef} />
      <LogoButton />
      {/* Back Btn */}
      <div className="absolute top-10 left-10">
        <Link
          href="/"
          className="px-5 py-3 text-white font-semibold rounded-2xl border border-1 border-dark_white"
        >
          Volver al inicio
        </Link>
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </main>
  );
}
