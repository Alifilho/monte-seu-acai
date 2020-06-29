import { Location } from "history";

export default interface HistoryParams extends Location {
  flavor: string;
  size: string;
  customizations: Customizations[];
  waitTime: number;
  sizeCost: number;
  finalValue: number;
}
