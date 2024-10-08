"use client";
import { currentSessionState } from "@/atoms/currentSessionState";
import LeftSide from "@/components/application/LeftSide";
import LogoButton from "@/components/application/LogoButton";
import RightSide from "@/components/application/RightSide";
import UseChartData from "@/hooks/UseChartData";
import { ClockStatusEnum } from "@/types/enums";
import { DetectionResults } from "@/types/objectDetection.type";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState<any>(null);
  const canvasRef = useRef<any>(null);
  const [sessionResults, setSessionResults] = useState<DetectionResults[]>([]);
  UseChartData(sessionResults);
  const [currentSession, setCurrentSession] =
    useRecoilState(currentSessionState);

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
        console.log("parar camara");
        stopCamera();
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

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track: any) => {
        track.stop();
      });
      setStream(null);
      if (videoRef.current) {
        (videoRef.current as any).srcObject = null;
      }
    }
  };

  function startApp() {
    setCurrentSession((prev) => ({ ...prev, status: ClockStatusEnum.RUNNING }));
    const intervalId = setInterval(() => {
      captureAndDetectCurrentVideo();
    }, 1000);

    return () => clearInterval(intervalId);
  }

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (currentSession.status === ClockStatusEnum.RUNNING) {
      interval = setInterval(() => {
        setCurrentSession((prev) => ({ ...prev, time: prev.time + 1 }));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentSession.status]);

  function startClock() {
    setCurrentSession((prev) => ({ ...prev, time: 0 }));
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
      const toBlobPromise = () =>
        new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg"));
      const blob = await toBlobPromise();
      const formData = new FormData();
      formData.append("image", blob as any, "image.jpeg");
      const response = await fetch("http://localhost:4000/detection", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setSessionResults((prev: any) => [...prev, result[0]]);
    }
  };

  return (
    <main className="flex items-center justify-between w-full relative">
      <LeftSide />
      <RightSide videoRef={videoRef} sessionResults={sessionResults} />
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
