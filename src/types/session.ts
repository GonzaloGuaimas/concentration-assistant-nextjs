import { ClockStatusEnum } from "./enums";

export interface CurrentSession {
  time: number;
  status: ClockStatusEnum;
  lap: number;
}
