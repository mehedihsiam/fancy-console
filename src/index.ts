import consoleSuccess from "./methods/success";
import consoleWarning from "./methods/warning";
import consoleError from "./methods/error";
import consoleInfo from "./methods/info";
import base from "./methods/base";

export const success = consoleSuccess;
export const warning = consoleWarning;
export const error = consoleError;
export const info = consoleInfo;

const fancyConsole = base;

export default fancyConsole;
