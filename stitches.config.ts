import { createStitches } from "@stitches/react";
import { blueDark, slateDark } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary1: blueDark.blue1,
      primary2: blueDark.blue2,
      primary3: blueDark.blue3,
      primary4: blueDark.blue4,
      primary5: blueDark.blue5,
      primary6: blueDark.blue6,
      primary7: blueDark.blue7,
      primary8: blueDark.blue8,
      primary9: blueDark.blue9,
      primary10: blueDark.blue10,
      primary11: blueDark.blue11,
      primary12: blueDark.blue12,
      neutral0: "black",
      neutral1: slateDark.slate1,
      neutral2: slateDark.slate2,
      neutral3: slateDark.slate3,
      neutral4: slateDark.slate4,
      neutral5: slateDark.slate5,
      neutral6: slateDark.slate6,
      neutral7: slateDark.slate7,
      neutral8: slateDark.slate8,
      neutral9: slateDark.slate9,
      neutral10: slateDark.slate10,
      neutral11: slateDark.slate11,
      neutral12: slateDark.slate12,
    },
  },
});
