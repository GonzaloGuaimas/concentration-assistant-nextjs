import { formattedResultsState } from "@/atoms/formattedResultsState";
import { DetectionResults } from "@/types/objectDetection.type";
import { FormattedResultsData } from "@/types/resultsData";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const UseChartData = (sessionResults: DetectionResults[]) => {
  const [, setFormattedResults] = useRecoilState(formattedResultsState);

  useEffect(() => {
    const formattedData = processArray(sessionResults);
    setFormattedResults(formattedData);
  }, [sessionResults]);

  function processArray(data: DetectionResults[]): FormattedResultsData[] {
    let time = 0;
    let acc_label_0 = 0;
    let acc_label_1 = 0;
    let acc_label_2 = 0;
    const result = [];

    for (let i = 0; i < data.length; i++) {
      // Incrementar el tiempo en 1 segundo
      time++;

      // Incrementar el recuento de la etiqueta actual
      switch (data[i].label) {
        case 0:
          acc_label_0++;
          break;
        case 1:
          acc_label_1++;
          break;
        case 2:
          acc_label_2++;
          break;
      }

      // Agregar el objeto resultante al resultado
      result.push({
        index: i + 1,
        time: formatTime(time),
        "Puntos concentración": acc_label_0,
        "Puntos desconcentración": acc_label_1,
        "Puntos uso teléfono": acc_label_2,
      });
    }

    return result;
  }

  function formatTime(time: any) {
    // Formatear el tiempo en formato HH:mm
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(num: any) {
    // Añadir un cero delante si es necesario
    return num < 10 ? `0${num}` : num;
  }
};

export default UseChartData;
