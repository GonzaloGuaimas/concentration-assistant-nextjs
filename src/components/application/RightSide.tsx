"use client";
import React, { RefObject } from "react";
import Card from "../Card";
import { AreaChart, Card as CardTremor, ProgressBar } from "@tremor/react";
import { ClockStatusEnum } from "@/types/enums";
import { FormattedResultsData } from "@/types/resultsData";
import { GraphComponent } from "./GraphComponent";

const RightSide = ({
  videoRef,
  clockState,
}: {
  videoRef: RefObject<HTMLVideoElement>;
  clockState: ClockStatusEnum;
}) => {
  return (
    <div className="inline-flex flex-col w-[60vw] min-h-screen items-center pt-10 px-20 text-center gap-5">
      <div className="inline-flex flex-col gap-1 max-w-[40vw]">
        <h2 className="text-3xl font-bold text-primary">
          Concentrate! tu tiempo vale oro
        </h2>
        <p className="text-dark_gray">
          Nuestra Inteligencia Artificial te está observando. Concentrate en tus
          tareas!
        </p>
      </div>

      <div className="w-full py-4 rounded-3xl gap-4 bg-light_gray justify-center items-center inline-flex flex-col">
        <div className="inline-flex flex-col gap-5">
          {/* Video Component */}
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
        <div className="grid grid-cols-3 px-5 gap-5">
          <CardTremor className="min-w-[15vw]">
            <h4 className="text-tremor-default text-tremor-content">
              Concentración
            </h4>
            <p className="text-tremor-metric font-semibold text-primary">
              25.42%
            </p>
            <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content">
              <span>% de Tiempo</span>
              <span>25.42%</span>
            </p>
            <ProgressBar value={32} className="mt-2" />
          </CardTremor>
          <CardTremor className="min-w-[15vw]">
            <h4 className="text-tremor-default text-tremor-content">
              Desconcentración
            </h4>
            <p className="text-tremor-metric font-semibold text-primary">
              25.42%
            </p>
            <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content">
              <span>% de Tiempo</span>
              <span>25.42%</span>
            </p>
            <ProgressBar value={32} className="mt-2" />
          </CardTremor>
          <CardTremor className="min-w-[15vw]">
            <h4 className="text-tremor-default text-tremor-content">
              Uso de teléfino
            </h4>
            <p className="text-tremor-metric font-semibold text-primary">
              25.42%
            </p>
            <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content">
              <span>% de Tiempo</span>
              <span>25.42%</span>
            </p>
            <ProgressBar value={32} className="mt-2" />
          </CardTremor>
        </div>
      </div>
      <GraphComponent />
    </div>
  );
};

export default RightSide;
