import { FormattedResultsData } from "@/types/resultsData";
import { atom } from "recoil";

export const formattedResultsState = atom({
  key: "formattedResultsState",
  default: [] as FormattedResultsData[],
});
