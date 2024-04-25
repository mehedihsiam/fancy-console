import { TColors } from "../types/colors";
import { TVariant } from "../types/text-variant";
import colorizeText from "./colorizeText";
import { getBackgroundColorCode, getTextColorCode } from "./getColorCode";
import getVariantText from "./getVariantText";

type TParams = {
  variant: TVariant;
  identifier?: string;
  identifierColor?: TColors;
  identifierBg?: TColors;
  badgeColor?: TColors;
  badgeBg?: TColors;
};

const getLogHeader = (params: TParams) => {
  const fnColor = getTextColorCode(params.identifierColor || "Bright Blue");
  const bgColor = getBackgroundColorCode(params.identifierBg || "Bright White");
  const file = params.identifier
    ? `located at ${colorizeText(` ${params.identifier} `, fnColor, bgColor)} `
    : "";
  const variantText = getVariantText(
    params.variant,
    params.badgeColor,
    params.badgeBg
  );

  return `\n\n\n* //==================== ${variantText} ${file}====================\\\\ *`;
};
export default getLogHeader;
