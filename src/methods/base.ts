import getLogFooter from "../helpers/getLogFooter";
import getLogHeader from "../helpers/getLogHeader";
import { TColors } from "../types/colors";
import { TVariant } from "../types/text-variant";

type TPayload = {
  content: any;
  variant: TVariant;
  identifier?: string;
  identifierColor?: TColors;
  identifierBg?: TColors;
  badgeBg?: TColors;
  badgeColor?: TColors;
};

const base = (params: TPayload) => {
  const header = getLogHeader({
    variant: params.variant,
    identifier: params.identifier,
    identifierBg: params.identifierBg,
    badgeBg: params.badgeBg,
    badgeColor: params.badgeColor,
  });
  const footer = getLogFooter();

  console.log(header, "\n\n", params.content, footer);
};

export default base;
