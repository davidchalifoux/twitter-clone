import { styled } from "../stitches.config";

const StickyHeaderContainer = styled("div", {
  padding: "1rem",
  position: "sticky",
  fontWeight: "bold",
  fontSize: "1.25rem",
  backgroundColor: "rgba(0, 0, 0, 0.65)",
  top: 0,
  backdropFilter: "blur(12px)",
  zIndex: 9,
});

export interface StickyHeaderProps {
  title: string;
}
export function StickyHeader({ title }: StickyHeaderProps): JSX.Element {
  return <StickyHeaderContainer>{title}</StickyHeaderContainer>;
}
