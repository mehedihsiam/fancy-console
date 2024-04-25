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
  identifier?: string;
  identifierColor?: TColors;
  identifierBg?: TColors;
  badgeColor?: TColors;
  badgeBg?: TColors;
};

type TVariant = "success" | "info" | "warning" | "error";

type ColorsType = TColors;
type VariantsType = TVariant;
declare const success: (params: TMethodParams) => void;
declare const warning: (params: TMethodParams) => void;
declare const error: (params: TMethodParams) => void;
declare const info: (params: TMethodParams) => void;
declare const fancyConsole: (params: {
    content: any;
    variant: TVariant;
    identifier?: string | undefined;
    identifierColor?: TColors | undefined;
    identifierBg?: TColors | undefined;
    badgeBg?: TColors | undefined;
    badgeColor?: TColors | undefined;
}) => void;

export { type ColorsType, type VariantsType, fancyConsole as default, error, info, success, warning };
