const width = {
  xs: "420px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const query = {
  /** From extra small devices (420 px) */
  xs: `(min-width: ${width.xs})`,
  /** From small devices (576 px) */
  sm: `(min-width: ${width.sm})`,
  /** From medium devices (768 px) */
  md: `(min-width: ${width.md})`,
  /** From large devices (992 px)*/
  lg: `(min-width: ${width.lg})`,
  /** From extra large devices (1200 px)*/
  xl: `(min-width: ${width.xl})`,
  /** Only touch devices */
  touch: "(pointer:none), (pointer:coarse)",
  from,
};

export type IQuery = "xs" | "sm" | "md" | "lg" | "xl" | "touch";

function from(q?: IQuery) {
  switch (q) {
    case "xs": return query.xs;
    case "sm": return query.sm;
    case "md": return query.md;
    case "lg": return query.lg;
    case "xl": return query.xl;
    case "touch": return query.touch;
    default:
      return "(min-width: 0px)";
  }
}
