import { TAnsiBgColors, TAnsiTxtColors } from "../types/ansi-colors";

const colorizeText = (
  text: string,
  color: TAnsiTxtColors,
  bg: TAnsiBgColors = 49
) => {
  return `\x1b[${color};${bg}m${text}\x1b[0m`;
};

export default colorizeText;
