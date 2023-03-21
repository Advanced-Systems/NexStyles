import { BehaviorSubject } from "rxjs";
import { AbstractTheme, LightTheme } from "../classes";

export default class ThemeSwitcherService {
  private theme: BehaviorSubject<string> = new BehaviorSubject<string>(
    LightTheme.alias
  );

  setTheme(Theme: typeof AbstractTheme) {
    this.theme.next(Theme.alias);
  }

  get getTheme(): string {
    return this.theme.value;
  }
}
