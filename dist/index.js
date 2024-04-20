// src/helpers/colorizeText.ts
var colorizeText = (text, color, bg = 49) => {
  return `\x1B[${color};${bg}m${text}\x1B[0m`;
};
var colorizeText_default = colorizeText;

// src/helpers/getColorCode.ts
var getTextColorCode = (color) => {
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
var getBackgroundColorCode = (color) => {
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

// src/helpers/getLogFooter.ts
var getLogFooter = () => {
  const color = getTextColorCode("Bright Blue");
  const footerFirst = `${colorizeText_default("Made with", color)}`;
  const footerLast = `${colorizeText_default("by Mehedi Siam", color)}`;
  return `

* \\\\==================== ${footerFirst} \u{1F497} ${footerLast} ====================// *`;
};
var getLogFooter_default = getLogFooter;

// src/helpers/getVariantText.ts
var getVariantDefaultColor = (variant) => {
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
var getVariantText = (variant, color) => {
  const defaultColor = getVariantDefaultColor(variant);
  const textColorCode = getTextColorCode("Bright White");
  const bgColorCode = getBackgroundColorCode(color || defaultColor);
  switch (variant) {
    case "success":
      return colorizeText_default(" SUCCESS LOG ", textColorCode, bgColorCode);
    case "info":
      return colorizeText_default(" INFO LOG ", textColorCode, bgColorCode);
    case "warning":
      return colorizeText_default(" WARING LOG ", textColorCode, bgColorCode);
    case "error":
      return colorizeText_default(" ERROR LOG ", textColorCode, bgColorCode);
    default:
      return colorizeText_default(" INFO LOG ", textColorCode, bgColorCode);
  }
};
var getVariantText_default = getVariantText;

// src/helpers/getLogHeader.ts
var getLogHeader = (variant, fileName) => {
  const fileNameColor = getTextColorCode("Bright Blue");
  const bgColor = getBackgroundColorCode("Bright White");
  const file = fileName ? `located at ${colorizeText_default(` ${fileName} `, fileNameColor, bgColor)} ` : "";
  const variantText = getVariantText_default(variant);
  return `


* //==================== ${variantText} ${file}====================\\\\ *`;
};
var getLogHeader_default = getLogHeader;

// src/index.ts
var fancyConsole = (params) => {
  console.log(
    getLogHeader_default(params.variant, params.fileName),
    "\n\n",
    params.content,
    getLogFooter_default()
  );
};
fancyConsole({
  content: "Console it here",
  variant: "success",
  fileName: "TEst File Name"
});
var src_default = fancyConsole;
export {
  src_default as default
};
//# sourceMappingURL=index.js.map