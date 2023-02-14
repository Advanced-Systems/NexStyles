import * as React from "react";
import { State } from "../enumerations";

export default interface IButton {
  label: string;
  state?: State;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}
