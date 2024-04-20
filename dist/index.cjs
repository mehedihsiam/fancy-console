"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  error: () => error2,
  info: () => info2,
  success: () => success2,
  warning: () => warning2
});
module.exports = __toCommonJS(src_exports);

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
var getVariantText = (variant, color, bg) => {
  const defaultColor = getVariantDefaultColor(variant);
  const textColorCode = getTextColorCode(color || "Bright White");
  const bgColorCode = getBackgroundColorCode(bg || defaultColor);
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
var getLogHeader = (params) => {
  const fnColor = getTextColorCode(params.fileNameColor || "Bright Blue");
  const bgColor = getBackgroundColorCode(params.fileNameBg || "Bright White");
  const file = params.fileName ? `located at ${colorizeText_default(` ${params.fileName} `, fnColor, bgColor)} ` : "";
  const variantText = getVariantText_default(
    params.variant,
    params.identifierColor,
    params.identifierBg
  );
  return `


* //==================== ${variantText} ${file}====================\\\\ *`;
};
var getLogHeader_default = getLogHeader;

// src/methods/success.ts
var success = (params) => {
  const header = getLogHeader_default({
    variant: "success",
    fileName: params.fileName,
    fileNameBg: params.fileNameBg,
    fileNameColor: params.fileNameColor,
    identifierBg: params.identifierBg,
    identifierColor: params.identifierColor
  });
  const footer = getLogFooter_default();
  console.log(header, "\n\n", params.content, footer);
};
var success_default = success;

// src/methods/warning.ts
var warning = (params) => {
  const header = getLogHeader_default({
    variant: "warning",
    fileName: params.fileName,
    fileNameBg: params.fileNameBg,
    fileNameColor: params.fileNameColor,
    identifierBg: params.identifierBg,
    identifierColor: params.identifierColor
  });
  const footer = getLogFooter_default();
  console.log(header, "\n\n", params.content, footer);
};
var warning_default = warning;

// src/methods/error.ts
var error = (params) => {
  const header = getLogHeader_default({
    variant: "error",
    fileName: params.fileName,
    fileNameBg: params.fileNameBg,
    fileNameColor: params.fileNameColor,
    identifierBg: params.identifierBg,
    identifierColor: params.identifierColor
  });
  const footer = getLogFooter_default();
  console.log(header, "\n\n", params.content, footer);
};
var error_default = error;

// src/methods/info.ts
var info = (params) => {
  const header = getLogHeader_default({
    variant: "info",
    fileName: params.fileName,
    fileNameBg: params.fileNameBg,
    fileNameColor: params.fileNameColor,
    identifierBg: params.identifierBg,
    identifierColor: params.identifierColor
  });
  const footer = getLogFooter_default();
  console.log(header, "\n\n", params.content, footer);
};
var info_default = info;

// src/index.ts
var success2 = success_default;
var warning2 = warning_default;
var error2 = error_default;
var info2 = info_default;
var fancyConsole = (params) => {
  const header = getLogHeader_default({
    variant: params.variant,
    fileName: params.fileName,
    fileNameBg: params.fileNameBg,
    identifierBg: params.identifierBg,
    identifierColor: params.identifierColor
  });
  const footer = getLogFooter_default();
  console.log(header, "\n\n", params.content, footer);
};
info2({
  content: "Log",
  fileName: "Siam file",
  fileNameBg: "Red",
  identifierBg: "Green"
});
var src_default = fancyConsole;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  error,
  info,
  success,
  warning
});
//# sourceMappingURL=index.cjs.map