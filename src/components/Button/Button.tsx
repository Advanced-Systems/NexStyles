import React from "react";
import { State } from "../../enumerations";
import { IButton } from "../../interfaces";

import "./Button.scss";

class Button extends React.Component<IButton> {
  render(): React.ReactNode {
    return (
      <button
        className="adv-sys-button"
        onClick={this.props.onClick}
        data-state={this.props.state ?? State.Success}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
