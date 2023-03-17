export default function getTheme(palette?: {}, fontFamilyName?: string): Omit<import("@mui/material/styles").Theme, "palette"> & import("@mui/material/styles").CssVarsTheme;
export { dsSpacing };
import dsSpacing from "./spacing";
