import getLogFooter from "../helpers/getLogFooter";
import getLogHeader from "../helpers/getLogHeader";
import { TMethodParams } from "../types/methodParams";

const info = (params: TMethodParams) => {
  const header = getLogHeader({
    variant: "info",
    fileName: params.fileName,
    fileNameBg: params.fileNameBg,
    fileNameColor: params.fileNameColor,
    identifierBg: params.identifierBg,
    identifierColor: params.identifierColor,
  });
  const footer = getLogFooter();

  console.log(header, "\n\n", params.content, footer);
};

export default info;
