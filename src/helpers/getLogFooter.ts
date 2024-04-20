import colorizeText from "./colorizeText";
import { getTextColorCode } from "./getColorCode";

const getLogFooter = () => {
  const color = getTextColorCode("Bright Blue");
  const footerFirst = `${colorizeText("Made with", color)}`;
  const footerLast = `${colorizeText("by Mehedi Siam", color)}`;
  return `\n\n* \\\\==================== ${footerFirst} 💗 ${footerLast} ====================// *`;
};
export default getLogFooter;
