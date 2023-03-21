import React from "react";
import { State } from "../enumerations";
import IElement from "./IElement.interface";

export default interface IButton extends IElement {
  label: string;
  state?: State;
  primary?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}
