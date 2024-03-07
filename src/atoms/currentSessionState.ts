import { ClockStatusEnum } from "@/types/enums";
import { atom } from "recoil";

export const currentSessionState = atom({
  key: "currentSessionState",
  default: {
    time: 0,
    status: ClockStatusEnum.PAUSED,
    lap: 1,
  },
});
