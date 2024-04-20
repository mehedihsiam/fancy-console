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

type TPayload = {
    content: any;
    variant: TVariant;
    fileName?: string;
    color?: TColors;
    bg?: TColors;
};
declare const fancyConsole: (params: TPayload) => void;

export { fancyConsole as default };
