import getLogFooter from "./helpers/getLogFooter";
import getLogHeader from "./helpers/getLogHeader";
import { TColors } from "./types/colors";
import { TVariant } from "./types/text-variant";

type TPayload = {
  content: any;
  variant: TVariant;
  fileName?: string;
  color?: TColors;
  bg?: TColors;
};

const fancyConsole = (params: TPayload) => {
  console.log(
    getLogHeader(params.variant, params.fileName),
    "\n\n",
    params.content,
    getLogFooter()
  );
};

export default fancyConsole;
