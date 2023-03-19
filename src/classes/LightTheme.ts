import AbstractTheme from "./Theme.abstract";
import styles from "../styles/styles.module.scss";

export default class LightTheme implements AbstractTheme {
  static success: string = styles.lightGreen;
  static info: string = styles.lightBlue;
  static warning: string = styles.lightYellow;
  static error: string = styles.lightRed;
}
