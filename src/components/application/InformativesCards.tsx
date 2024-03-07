import React from "react";
import { Card, ProgressBar } from "@tremor/react";
import { useRecoilState } from "recoil";
import { percentResultsState } from "@/atoms/percentResultsState";
import { formatPercentage } from "@/utils/formatters";

const InformativesCards = () => {
  const [percentResults] = useRecoilState(percentResultsState);

  return (
    <div className="grid grid-cols-3 px-5 gap-5 w-full">
      <Card className="w-full">
        <h4 className="text-tremor-default text-tremor-content">
          Concentración
        </h4>
        <p className="text-tremor-metric font-semibold text-primary">
          {formatPercentage(percentResults.concentration.percent)}
        </p>
        <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content">
          <span>Minutos:</span>
          <span>{percentResults.concentration.minutes}</span>
        </p>
        <ProgressBar
          value={percentResults.concentration.integer}
          className="mt-2"
        />
      </Card>
      <Card className="w-full">
        <h4 className="text-tremor-default text-tremor-content">
          Desconcentración
        </h4>
        <p className="text-tremor-metric font-semibold text-primary">
          {formatPercentage(percentResults.desconcentration.percent)}
        </p>
        <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content">
          <span>Minutos:</span>
          <span>{percentResults.desconcentration.minutes}</span>
        </p>
        <ProgressBar
          value={percentResults.desconcentration.integer}
          className="mt-2"
        />
      </Card>
      <Card className="w-full">
        <h4 className="text-tremor-default text-tremor-content">
          Uso de teléfino
        </h4>
        <p className="text-tremor-metric font-semibold text-primary">
          {formatPercentage(percentResults.phoneUsage.percent)}
        </p>
        <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content">
          <span>Minutos:</span>
          <span>{percentResults.phoneUsage.minutes}</span>
        </p>
        <ProgressBar
          value={percentResults.phoneUsage.integer}
          className="mt-2"
        />
      </Card>
    </div>
  );
};

export default InformativesCards;
