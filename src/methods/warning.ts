import getLogFooter from "../helpers/getLogFooter";
import getLogHeader from "../helpers/getLogHeader";
import { TMethodParams } from "../types/methodParams";

const warning = (params: TMethodParams) => {
  const header = getLogHeader({
    variant: "warning",
    identifier: params.identifier,
    identifierBg: params.identifierBg,
    identifierColor: params.identifierColor,
    badgeBg: params.badgeBg,
    badgeColor: params.badgeColor,
  });
  const footer = getLogFooter();

  console.log(header, "\n\n", params.content, footer);
};

export default warning;
