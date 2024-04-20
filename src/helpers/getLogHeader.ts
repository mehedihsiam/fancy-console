import { TColors } from "../types/colors";
import { TVariant } from "../types/text-variant";
import colorizeText from "./colorizeText";
import { getBackgroundColorCode, getTextColorCode } from "./getColorCode";
import getVariantText from "./getVariantText";

type TParams = {
  variant: TVariant;
  fileName?: string;
  fileNameColor?: TColors;
  fileNameBg?: TColors;
  identifierColor?: TColors;
  identifierBg?: TColors;
};

const getLogHeader = (params: TParams) => {
  const fnColor = getTextColorCode(params.fileNameColor || "Bright Blue");
  const bgColor = getBackgroundColorCode(params.fileNameBg || "Bright White");
  const file = params.fileName
    ? `located at ${colorizeText(` ${params.fileName} `, fnColor, bgColor)} `
    : "";
  const variantText = getVariantText(
    params.variant,
    params.identifierColor,
    params.identifierBg
  );

  return `\n\n\n* //==================== ${variantText} ${file}====================\\\\ *`;
};
export default getLogHeader;
