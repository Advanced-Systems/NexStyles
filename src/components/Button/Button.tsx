import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { State } from "../../enumerations";
import { IButton } from "../../interfaces";

import "./Button.scss";

class Button extends React.Component<IButton> {
  public static defaultProps = {
    id: `adv-btn-${uuidv4()}`,
    className: '',
    state: State.Success,
  };

  render(): React.ReactNode {
    return (
      <button
        id={this.props.id}
        className={["adv-sys-button", this.props.className].filter(Boolean).join(' ')}
        style={this.props.style}
        onClick={this.props.onClick}
        data-state={this.props.state}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
