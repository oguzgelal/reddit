import { Colors } from "@blueprintjs/core";
import { transparentize } from "polished";
import global from "./global-styles";

export default {
  ...global,
  background: Colors.LIGHT_GRAY5,
  textDefault: Colors.DARK_GRAY1,
  textMuted: Colors.GRAY1,
  textDisabled: transparentize(0.5, Colors.GRAY1),
  heading: Colors.DARK_GRAY1,
  link: Colors.BLUE2,
  icon: Colors.GRAY1,
  iconHover: Colors.DARK_GRAY1,
  iconSelected: Colors.BLUE3,
  iconDisabled: transparentize(0.5, Colors.GRAY1),
  divider: transparentize(0.95, Colors.BLACK),
  codeText: Colors.GRAY1,
  codeBackground: transparentize(0.4, Colors.WHITE),
};
