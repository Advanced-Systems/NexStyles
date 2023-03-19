import React from "react";
import { v4 as uuidv4 } from "uuid";
import { State } from "../../enumerations";
import { IButton } from "../../interfaces";

import "./Button.scss";
import { LightTheme } from "../../classes";

class Button extends React.Component<IButton> {
  public static defaultProps = {
    id: `adv-btn-${uuidv4()}`,
    className: '',
    state: State.Success,
    primary: true,
  };

  render(): React.ReactNode {
    return (
      <button
        id={this.props.id}
        className={[
          "adv-sys-button",
          this.props.className,
          this.props.mobile && 'mobile',
          this.props.primary ? 'primary' : 'secondary',
          LightTheme.warning, // NOTE: testing import of variables from SCSS to TS
        ].filter(Boolean).join(' ')}
        style={this.props.style}
        onClick={this.props.onClick}
        data-state={this.props.state}
        hidden={this.props.hidden}
        disabled={this.props.disabled}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
