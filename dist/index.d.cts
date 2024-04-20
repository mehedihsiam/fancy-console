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

type TMethodParams = {
  content: any;
  fileName?: string;
  fileNameColor?: TColors;
  fileNameBg?: TColors;
  identifierColor?: TColors;
  identifierBg?: TColors;
};

type TVariant = "success" | "info" | "warning" | "error";

type TPayload = {
    content: any;
    variant: TVariant;
    fileName?: string;
    fileNameColor?: TColors;
    fileNameBg?: TColors;
    identifierBg?: TColors;
    identifierColor?: TColors;
};
declare const success: (params: TMethodParams) => void;
declare const warning: (params: TMethodParams) => void;
declare const error: (params: TMethodParams) => void;
declare const info: (params: TMethodParams) => void;
declare const fancyConsole: (params: TPayload) => void;

export { fancyConsole as default, error, info, success, warning };
