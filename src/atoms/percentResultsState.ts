import { atom } from "recoil";

export const percentResultsState = atom({
  key: "percentResultsState",
  default: {
    concentration: { percent: 0, integer: 0, minutes: "00:00" },
    desconcentration: { percent: 0, integer: 0, minutes: "00:00" },
    phoneUsage: { percent: 0, integer: 0, minutes: "00:00" },
  },
});
