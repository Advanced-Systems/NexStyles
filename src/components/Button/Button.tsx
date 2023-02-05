import React from "react";

import "./Button.scss";

export interface IButton {
  label: string;
}

const Button = (props: IButton) => {
  return (<button className="adv-sys-button">{props.label}</button>);
}

export default Button;
