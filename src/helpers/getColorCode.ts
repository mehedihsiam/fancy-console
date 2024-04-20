import { TColors } from "../types/colors";

export const getTextColorCode = (color: TColors) => {
  switch (color) {
    case "Black":
      return 30;
    case "Red":
      return 31;
    case "Green":
      return 32;
    case "Yellow":
      return 33;
    case "Blue":
      return 34;
    case "Magenta":
      return 35;
    case "Cyan":
      return 36;
    case "White":
      return 37;
    case "Gray":
      return 90;
    case "Bright Red":
      return 91;
    case "Bright Green":
      return 92;
    case "Bright Yellow":
      return 93;
    case "Bright Blue":
      return 94;
    case "Bright Magenta":
      return 95;
    case "Bright Cyan":
      return 96;
    case "Bright White":
      return 97;

    default:
      return 94;
  }
};

export const getBackgroundColorCode = (color: TColors) => {
  switch (color) {
    case "Black":
      return 40;
    case "Red":
      return 41;
    case "Green":
      return 42;
    case "Yellow":
      return 43;
    case "Blue":
      return 44;
    case "Magenta":
      return 45;
    case "Cyan":
      return 46;
    case "White":
      return 47;
    case "Gray":
      return 100;
    case "Bright Red":
      return 101;
    case "Bright Green":
      return 102;
    case "Bright Yellow":
      return 103;
    case "Bright Blue":
      return 104;
    case "Bright Magenta":
      return 105;
    case "Bright Cyan":
      return 106;
    case "Bright White":
      return 107;

    default:
      return 104;
  }
};
