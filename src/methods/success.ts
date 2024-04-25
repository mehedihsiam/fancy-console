import getLogFooter from "../helpers/getLogFooter";
import getLogHeader from "../helpers/getLogHeader";
import { TMethodParams } from "../types/methodParams";

const success = (params: TMethodParams) => {
  const header = getLogHeader({
    variant: "success",
    identifier: params.identifier,
    identifierBg: params.identifierBg,
    identifierColor: params.identifierColor,
    badgeBg: params.badgeBg,
    badgeColor: params.badgeColor,
  });
  const footer = getLogFooter();

  console.log(header, "\n\n", params.content, footer);
};

export default success;
