export interface FormattedResultsData {
  index: number;
  time: string;
  "Puntos concentración": number;
  "Puntos desconcentración": number;
  "Puntos uso teléfono": number;
}

export interface PercentajeResultData {
  concentration: { percent: number; integer: number; minutes: string };
  desconcentration: { percent: number; integer: number; minutes: string };
  phoneUsage: { percent: number; integer: number; minutes: string };
}
