import consoleSuccess from "./methods/success";
import consoleWarning from "./methods/warning";
import consoleError from "./methods/error";
import consoleInfo from "./methods/info";
import base from "./methods/base";
import { TColors } from "./types/colors";
import { TVariant } from "./types/text-variant";

export type ColorsType = TColors;
export type VariantsType = TVariant;
export const success = consoleSuccess;
export const warning = consoleWarning;
export const error = consoleError;
export const info = consoleInfo;

const fancyConsole = base;

export default fancyConsole;
