import { atom } from "recoil";

export const currentTimeState = atom({
  key: "currentTimeState",
  default: "00:00",
});
