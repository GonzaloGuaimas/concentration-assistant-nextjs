import React, { RefObject } from "react";
import Card from "../Card";

const RightSide = ({ videoRef }: { videoRef: RefObject<HTMLVideoElement> }) => {
  return (
    <div className="inline-flex flex-col w-[60vw] min-h-screen items-center pt-32 px-20 text-center gap-10">
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
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-3 px-5 gap-5">
          <Card>
            <div className="inline-flex justify-center w-full items-center flex-col">
              <p className="font-bold text-md text-primary">Concentración</p>
              <p className="text-2xl font-bold text-black">92.53%</p>
            </div>
          </Card>
          <Card>
            <div className="inline-flex justify-center w-full items-center flex-col">
              <p className="font-bold text-md text-primary">Desconcentración</p>
              <p className="text-2xl font-bold text-black"> 12.31%</p>
            </div>
          </Card>
          <Card>
            <div className="inline-flex justify-center w-full items-center flex-col">
              <p className="font-bold text-md text-primary">Uso de teléfono</p>
              <p className="text-2xl font-bold text-black"> 1.52%</p>
            </div>
          </Card>
          {/* <Card>
            <div className="inline-flex justify-center w-full items-center flex-col">
              <p className="font-bold text-md text-primary">Ausencia</p>
              <p className="text-2xl font-bold text-black"> 0.42%</p>
            </div>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
