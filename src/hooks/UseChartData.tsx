import { formattedResultsState } from "@/atoms/formattedResultsState";
import { percentResultsState } from "@/atoms/percentResultsState";
import { DetectionResults } from "@/types/objectDetection.type";
import {
  FormattedResultsData,
  PercentajeResultData,
} from "@/types/resultsData";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const UseChartData = (sessionResults: DetectionResults[]) => {
  const [formattedResults, setFormattedResults] = useRecoilState(
    formattedResultsState
  );
  const [, setPercentResults] = useRecoilState(percentResultsState);

  useEffect(() => {
    const formattedData = processArray(sessionResults);
    setFormattedResults(formattedData);
  }, [sessionResults]);

  useEffect(() => {
    if (formattedResults.length > 0) {
      const percentajes = calculatePercentages(formattedResults);
      setPercentResults(percentajes);
    }
  }, [formattedResults]);

  function calculatePercentages(
    data: FormattedResultsData[]
  ): PercentajeResultData {
    const point = data[data.length - 1];

    const totalPoints = point.index;

    const totalConcentrationPoints = point["Puntos concentración"];
    const totalDesconcentrationPoints = point["Puntos desconcentración"];
    const totalPhoneUsagePoints = point["Puntos uso teléfono"];

    const concentrationPercent = (totalConcentrationPoints / totalPoints) * 100;
    const desconcentrationPercent =
      (totalDesconcentrationPoints / totalPoints) * 100;
    const phoneUsagePercent = (totalPhoneUsagePoints / totalPoints) * 100;

    const concentrationInteger = Math.round(concentrationPercent);
    const desconcentrationInteger = Math.round(desconcentrationPercent);
    const phoneUsageInteger = Math.round(phoneUsagePercent);

    return {
      concentration: {
        percent: concentrationPercent,
        integer: concentrationInteger,
        minutes: formatTime(totalConcentrationPoints * 5),
      },
      desconcentration: {
        percent: desconcentrationPercent,
        integer: desconcentrationInteger,
        minutes: formatTime(totalDesconcentrationPoints * 5),
      },
      phoneUsage: {
        percent: phoneUsagePercent,
        integer: phoneUsageInteger,
        minutes: formatTime(totalPhoneUsagePoints * 5),
      },
    };
  }

  function processArray(data: DetectionResults[]): FormattedResultsData[] {
    let time = 0;
    let acc_label_0 = 0;
    let acc_label_1 = 0;
    let acc_label_2 = 0;
    const result = [];

    for (let i = 0; i < data.length; i++) {
      time++;

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
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(num: any) {
    return num < 10 ? `0${num}` : num;
  }
};

export default UseChartData;
