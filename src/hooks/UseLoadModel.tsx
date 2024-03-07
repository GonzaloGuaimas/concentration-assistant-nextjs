import { downloadBuffer } from "@/utils/model/model-download";
import { InferenceSession, Tensor } from "onnxruntime-web";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { sessionModelState } from "@/atoms/sessionModelState";
const CUSTOM_MODEL_PATH = "./models/custom_model.onnx";
const NMS_MODEL_PATH = "./models/nms-yolov8.onnx";
const MODEL_SHAPES = [1, 3, 640, 640];

const UseLoadModel = () => {
  const [session, setSession] = useRecoilState<any>(sessionModelState);

  useEffect(() => {
    if (!session) getModel();
  }, []);

  async function getModel() {
    console.log("model downloading");
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
  return {};
};

export default UseLoadModel;
