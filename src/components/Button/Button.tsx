import React from "react";
import { v4 as uuidv4 } from "uuid";
import { State } from "../../enumerations";
import { IButton } from "../../interfaces";

import "./Button.scss";
import { LightTheme } from "../../classes";
import { ThemeSwitcherService } from "../../services";

class Button extends React.Component<IButton> {
  public static defaultProps = {
    id: `adv-btn-${uuidv4()}`,
    className: "",
    state: State.Success,
    primary: true,
  };

  private themeSwitcherService = new ThemeSwitcherService();

  constructor(props: IButton) {
    super(props);
    this.themeSwitcherService.setTheme(LightTheme);
  }

  render(): React.ReactNode {
    return (
      <button
        id={this.props.id}
        className={[
          "adv-sys-button",
          this.props.className,
          this.props.mobile && "mobile",
          this.props.primary ? "primary" : "secondary",
          this.themeSwitcherService.getTheme, // NOTE: testing import of variables from SCSS to TS
        ]
          .filter(Boolean)
          .join(" ")}
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
