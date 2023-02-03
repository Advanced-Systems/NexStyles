import React from "react";

interface IButton {
  label: string;
}

const Button = (props: IButton) => {
  return (<button>{props.label}</button>);
}

export default Button;
