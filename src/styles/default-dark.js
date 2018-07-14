import { Colors } from "@blueprintjs/core";
import { transparentize } from "polished";
import global from './global';

export default {
  ...global,
  background: Colors.DARK_GRAY3,
  textDefault: Colors.LIGHT_GRAY5,
  textMuted: Colors.GRAY5,
  textDisabled: transparentize(0.5, Colors.GRAY5),
  heading: Colors.LIGHT_GRAY5,
  link: Colors.BLUE5,
  icon: Colors.GRAY5,
  iconHover: Colors.LIGHT_GRAY5,
  iconSelected: Colors.BLUE3,
  iconDisabled: transparentize(0.5, Colors.GRAY5),
  divider: transparentize(0.5, Colors.BLACK),
  codeText: Colors.GRAY5,
  codeBackground: transparentize(0.7, Colors.BLACK),
};
