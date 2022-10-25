import { styled } from "../stitches.config";

export const Button = styled("button", {
  backgroundColor: "$primary9",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "2.125rem",
  padding: "0 1rem",
  borderRadius: "9999px",
  color: "inherit",
  "&:hover": {
    backgroundColor: "$primary10",
    cursor: "pointer",
  },
  "&:disabled": {
    backgroundColor: "$primary8",
    color: "$neutral11",
  },
  variants: {
    size: {
      large: {
        fontSize: "17px",
        minWidth: "12rem",
        height: "52px",
      },
    },
  },
});
