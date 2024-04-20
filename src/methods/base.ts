import getLogFooter from "../helpers/getLogFooter";
import getLogHeader from "../helpers/getLogHeader";
import { TColors } from "../types/colors";
import { TVariant } from "../types/text-variant";

type TPayload = {
  content: any;
  variant: TVariant;
  fileName?: string;
  fileNameColor?: TColors;
  fileNameBg?: TColors;
  identifierBg?: TColors;
  identifierColor?: TColors;
};

const base = (params: TPayload) => {
  const header = getLogHeader({
    variant: params.variant,
    fileName: params.fileName,
    fileNameBg: params.fileNameBg,
    identifierBg: params.identifierBg,
    identifierColor: params.identifierColor,
  });
  const footer = getLogFooter();

  console.log(header, "\n\n", params.content, footer);
};

export default base;
