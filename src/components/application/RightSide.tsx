"use client";
import React, { RefObject } from "react";
import Card from "../Card";
import { AreaChart, Card as CardTremor, ProgressBar } from "@tremor/react";
import { ClockStatusEnum } from "@/types/enums";
import { FormattedResultsData } from "@/types/resultsData";

const RightSide = ({
  videoRef,
  clockState,
  formattedResults,
}: {
  videoRef: RefObject<HTMLVideoElement>;
  clockState: ClockStatusEnum;
  formattedResults: FormattedResultsData[];
}) => {
  // const VideoComponent = () => {
  //   return (
  //     <div className="inline-flex justify-center w-full items-center flex-col">
  //       <div className="relative w-64 h-48 flex justify-center items-center">
  //         <video
  //           ref={videoRef}
  //           className="absolute top-0 left-0 w-full h-full object-cover transform scaleX(-1)"
  //           autoPlay
  //           style={{ transform: "scaleX(-1)" }}
  //         />
  //       </div>
  //       <p className="text-primary self-center font-bold text-lg">
  //         CONCENTRADO
  //       </p>
  //     </div>
  //   );
  // };
  const GraphComponent = () => {
    return (
      <div className="min-w-[40vw]">
        <AreaChart
          className="h-60"
          data={formattedResults}
          index="time"
          yAxisWidth={65}
          categories={[
            "Puntos concentración",
            "Puntos desconcentración",
            "Puntos uso teléfono",
          ]}
          colors={["teal", "indigo", "slate"]}
        />
      </div>
    );
  };

  return (
    <div className="inline-flex flex-col w-[60vw] min-h-screen items-center pt-24 px-20 text-center gap-10">
      <div className="inline-flex flex-col gap-4 max-w-[40vw]">
        <h2 className="text-3xl font-bold text-primary">
          Concentrate! tu tiempo vale oro
        </h2>
        <p className="text-dark_gray">
          Nuestra Inteligencia Artificial te está observando. Concentrate en tus
          tareas!
        </p>
      </div>

      <div className="w-full py-8 rounded-3xl gap-4 bg-light_gray justify-center items-center inline-flex flex-col">
        <div className="inline-flex flex-col">
          <p className="text-md text-primary font-semibold self-center">
            Mantené el foco
          </p>
        </div>
        <div className="inline-flex flex-col gap-5">
          <Card>
            <div className="inline-flex justify-center w-full items-center flex-col">
              <div className="relative w-64 h-48 flex justify-center items-center">
                <video
                  ref={videoRef}
                  className="absolute top-0 left-0 w-full h-full object-cover transform scaleX(-1)"
                  autoPlay
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
              <p className="text-primary self-center font-bold text-lg">
                CONCENTRADO
              </p>
            </div>
            {/* {clockState === ClockStatusEnum.RUNNING ? (
              <VideoComponent />
            ) : (
              <GraphComponent />
            )} */}
          </Card>
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
    </div>
  );
};

export default RightSide;
