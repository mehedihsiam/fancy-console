type TColors =
  | "Black"
  | "Red"
  | "Green"
  | "Yellow"
  | "Blue"
  | "Magenta"
  | "Cyan"
  | "White"
  | "Gray"
  | "Bright Red"
  | "Bright Green"
  | "Bright Yellow"
  | "Bright Blue"
  | "Bright Magenta"
  | "Bright Cyan"
  | "Bright White";

type TVariant = "success" | "info" | "warning" | "error";

type TMethodParams = {
  content: any;
  fileName?: string;
  fileNameColor?: TColors;
  fileNameBg?: TColors;
  identifierColor?: TColors;
  identifierBg?: TColors;
};

declare const success: (params: TMethodParams) => void;
declare const warning: (params: TMethodParams) => void;
declare const error: (params: TMethodParams) => void;
declare const info: (params: TMethodParams) => void;
declare const fancyConsole: (params: {
    content: any;
    variant: TVariant;
    fileName?: string | undefined;
    fileNameColor?: TColors | undefined;
    fileNameBg?: TColors | undefined;
    identifierBg?: TColors | undefined;
    identifierColor?: TColors | undefined;
}) => void;

export { fancyConsole as default, error, info, success, warning };
