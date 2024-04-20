import { TVariant } from "../types/text-variant";
import colorizeText from "./colorizeText";
import { getBackgroundColorCode, getTextColorCode } from "./getColorCode";
import getVariantText from "./getVariantText";

const getLogHeader = (variant: TVariant, fileName?: string) => {
  const fileNameColor = getTextColorCode("Bright Blue");
  const bgColor = getBackgroundColorCode("Bright White");
  const file = fileName
    ? `located at ${colorizeText(` ${fileName} `, fileNameColor, bgColor)} `
    : "";
  const variantText = getVariantText(variant);

  return `\n\n\n* //==================== ${variantText} ${file}====================\\\\ *`;
};
export default getLogHeader;
