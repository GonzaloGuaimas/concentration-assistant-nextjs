"use client";
import { currentTimeState } from "@/atoms/currentTimeState";
import { ClockStatusEnum } from "@/types/enums";
import React from "react";
import { useRecoilState } from "recoil";

const LeftSide = ({
  handleChangeClockState,
}: {
  handleChangeClockState: (state: ClockStatusEnum) => void;
}) => {
  const [currentTime] = useRecoilState(currentTimeState);

  return (
    <div className="inline-flex flex-col w-[40vw] bg-primary min-h-screen pt-40 text-light_white px-20 justify-between pb-20">
      <div className="inline-flex flex-col gap-5">
        <div className="inline-flex flex-col w-fit">
          <p className="text-md -mb-5">Tiempo en curso</p>
          <h4 className="text-[80px] font-bold">{currentTime}</h4>
          <p className="text-md -mt-5 text-end">Ronda 2/3</p>
        </div>
        <div className="inline-flex w-full justify-end gap-5 pr-20">
          <button
            className="px-5 py-3 bg-light_white text-primary rounded-2xl shadow-lg hover:bg-light_gray transition-all duration-300 font-semibold w-fit"
            onClick={() => handleChangeClockState(ClockStatusEnum.RUNNING)}
          >
            Comenzar
          </button>
          <button
            className="px-5 py-3 bg-light_white text-primary rounded-2xl shadow-lg hover:bg-light_gray transition-all duration-300 font-semibold w-fit"
            onClick={() => handleChangeClockState(ClockStatusEnum.STOPPED)}
          >
            Detener
          </button>
        </div>
      </div>
      <div className="inline-flex flex-col gap-2">
        <h4 className="text-2xl font-bold">Asistente de Concentración</h4>
        <div className="inline-flex flex-col">
          <p>Ing. Guaimas Gonzalo Bartolomé</p>
          <p>Universidad Católica de Salta</p>
          <p>Ingeniería Informatica</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
