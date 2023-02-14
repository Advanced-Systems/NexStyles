import * as React from "react";
import { State } from "../enumerations";
import IElement from "./IElement.interface";

export default interface IButton extends IElement {
  label: string;
  state?: State;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}
