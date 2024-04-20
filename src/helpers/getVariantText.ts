import { TColors } from "../types/colors";
import { TVariant } from "../types/text-variant";
import colorizeText from "./colorizeText";
import { getBackgroundColorCode, getTextColorCode } from "./getColorCode";

const getVariantDefaultColor = (variant: TVariant) => {
  switch (variant) {
    case "success":
      return "Bright Green";
    case "info":
      return "Bright Blue";
    case "warning":
      return "Bright Yellow";
    case "error":
      return "Bright Red";

    default:
      return "Bright Blue";
  }
};

const getVariantText = (variant: TVariant, color?: TColors, bg?: TColors) => {
  const defaultColor = getVariantDefaultColor(variant);
  const textColorCode = getTextColorCode(color || "Bright White");
  const bgColorCode = getBackgroundColorCode(bg || defaultColor);

  switch (variant) {
    case "success":
      return colorizeText(" SUCCESS LOG ", textColorCode, bgColorCode);

    case "info":
      return colorizeText(" INFO LOG ", textColorCode, bgColorCode);
    case "warning":
      return colorizeText(" WARING LOG ", textColorCode, bgColorCode);
    case "error":
      return colorizeText(" ERROR LOG ", textColorCode, bgColorCode);

    default:
      return colorizeText(" INFO LOG ", textColorCode, bgColorCode);
  }
};

export default getVariantText;
