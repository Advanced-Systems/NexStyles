import * as React from "react";

export default interface IElement {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  mobile?: boolean;
}
