"use client";
import LeftSide from "@/components/application/LeftSide";
import LogoButton from "@/components/application/LogoButton";
import RightSide from "@/components/application/RightSide";
import { DetectionResults } from "@/types/objectDetection.type";
import { detectImage } from "@/utils/model/model-detect";
import { downloadBuffer } from "@/utils/model/model-download";
import { resultTransform } from "@/utils/model/model-results";
import Link from "next/link";
import { InferenceSession, Tensor } from "onnxruntime-web";
import { useEffect, useRef, useState } from "react";

const CUSTOM_MODEL_PATH = "./models/custom_model.onnx";
const NMS_MODEL_PATH = "./models/nms-yolov8.onnx";
const MODEL_SHAPES = [1, 3, 640, 640];

export default function Home() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState<any>(null);
  const canvasRef = useRef<any>(null);
  const [detectionResult, setDetectionResult] = useState<
    DetectionResults[] | null
  >(null);
  const [results, setResults] = useState<any[]>([]);

  const [session, setSession] = useState<{
    net: InferenceSession;
    nms: InferenceSession;
  } | null>(null);

  useEffect(() => {
    // if (!session) getModel();
  }, []);

  useEffect(() => {
    // startCamera();
  }, []);

  // useEffect(() => {
  //   console.log("--------");
  //   console.log(results);
  //   console.log(detectionResult);
  // }, [results]);

  async function getModel() {
    const arrBufNet = await downloadBuffer(CUSTOM_MODEL_PATH);
    const yolov8 = await InferenceSession.create(arrBufNet);

    const arrBufNMS = await downloadBuffer(NMS_MODEL_PATH);
    const nms = await InferenceSession.create(arrBufNMS, {
      executionProviders: ["wasm"],
    });

    const tensor = new Tensor(
      "float32",
      new Float32Array(MODEL_SHAPES.reduce((a, b) => a * b)),
      MODEL_SHAPES
    );
    await yolov8.run({ images: tensor });

    setSession({ net: yolov8, nms: nms });

    console.log("model loaded");
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
    const intervalId = setInterval(() => {
      captureAndDetectCurrentVideo();
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

      const result = await detectImage(img, session);
      const resultTransformed = resultTransform(result);
      console.log(
        `label: ${resultTransformed[0].label} | ${resultTransformed[0].confidence}`
      );
      setDetectionResult(resultTransformed);
      setResults((prev: any) => [...prev, result[0]]);

      URL.revokeObjectURL(img.src);
    }
  };

  return (
    <main className="flex items-center justify-between w-full relative">
      <LeftSide startCamera={startApp} />
      <RightSide videoRef={videoRef} />
      <LogoButton />
      {/* Back Btn */}
      <div className="absolute top-10 right-10">
        <Link
          href="/"
          className="px-5 py-3 text-light_white font-semibold bg-primary rounded-2xl"
        >
          Volver al inicio
        </Link>
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </main>
  );
}
