import { Location } from "history";

//Interface to include order data in the app's Location
export default interface HistoryParams extends Location {
  flavor: string;
  size: string;
  customizations: Customizations[];
  waitTime: number;
  sizeCost: number;
  finalValue: number;
}
