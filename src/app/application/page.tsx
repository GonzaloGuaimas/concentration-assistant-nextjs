"use client";
import LeftSide from "@/components/application/LeftSide";
import LogoButton from "@/components/application/LogoButton";
import RightSide from "@/components/application/RightSide";
// import UseChartData from "@/hooks/UseChartData";
import { ClockStatusEnum } from "@/types/enums";
import { DetectionResults } from "@/types/objectDetection.type";
import { detectImage } from "@/utils/model/model-detect";
import { downloadBuffer } from "@/utils/model/model-download";
import { resultTransform } from "@/utils/model/model-results";
import Link from "next/link";
import { InferenceSession, Tensor } from "onnxruntime-web";
import { useEffect, useRef, useState } from "react";
import example_data from "../../utils/example_data.json";

const CUSTOM_MODEL_PATH = "./models/custom_model.onnx";
const NMS_MODEL_PATH = "./models/nms-yolov8.onnx";
const MODEL_SHAPES = [1, 3, 640, 640];

export default function Home() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState<any>(null);
  const canvasRef = useRef<any>(null);
  // const [detectionResult, setDetectionResult] = useState<
  //   DetectionResults[] | null
  // >(null);
  const [sessionResults, setSessionResults] = useState<DetectionResults[]>([]);
  const [clockState, setClockState] = useState<ClockStatusEnum>(
    ClockStatusEnum.PAUSED
  );
  const [session, setSession] = useState<{
    net: InferenceSession;
    nms: InferenceSession;
  } | null>(null);

  // const { formattedResults } = UseChartData(sessionResults);

  useEffect(() => {
    if (!session) getModel();
  }, []);

  useEffect(() => {
    startCamera();
  }, []);

  useEffect(() => {
    // startCamera();
    statusManager(clockState);
  }, [clockState]);

  function statusManager(status: ClockStatusEnum): void {
    switch (status) {
      case ClockStatusEnum.RUNNING:
        startCamera();
        startApp();
        break;
      case ClockStatusEnum.STOPPED:
        // startCamera();
        break;

      default:
        break;
    }
  }

  const handleChangeClockState = (state: ClockStatusEnum) => {
    setClockState(state);
  };

  // useEffect(() => {
  //   console.log("--------");
  //   console.log(results);
  //   console.log(detectionResult);
  // }, [results]);

  async function getModel() {
    console.log("carga modelo");
    console.log(CUSTOM_MODEL_PATH);
    const arrBufNet = await downloadBuffer(CUSTOM_MODEL_PATH);
    console.log(arrBufNet);
    const yolov8 = await InferenceSession.create(arrBufNet);
    console.log("pasa?");

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
    setClockState(ClockStatusEnum.RUNNING);
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
      // setDetectionResult(resultTransformed);
      setSessionResults((prev: any) => [...prev, result[0]]);

      URL.revokeObjectURL(img.src);
    }
  };

  return (
    <main className="flex items-center justify-between w-full relative">
      <LeftSide handleChangeClockState={handleChangeClockState} />
      <RightSide
        videoRef={videoRef}
        clockState={clockState}
        formattedResults={[]}
      />
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
