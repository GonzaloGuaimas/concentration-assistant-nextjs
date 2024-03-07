import { formattedResultsState } from "@/atoms/formattedResultsState";
import { AreaChart, Card } from "@tremor/react";
import { useRecoilState } from "recoil";

export const GraphComponent = () => {
  const [formattedResults] = useRecoilState(formattedResultsState);
  return (
    <Card>
      <div className="w-full">
        <AreaChart
          className="h-52"
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
    </Card>
  );
};
