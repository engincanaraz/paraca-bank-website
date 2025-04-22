/**
 * Projede kullanılan tema sabitleri
 * Renk, boyut ve medya sorgu değerleri
 */

// Renk paleti
export const COLORS = {
  primary: {
    main: "#194FDA",
    light: "rgba(25, 79, 218, 0.2)", // #194FDA with 0.2 opacity
  },
  secondary: {
    main: "#333333",
    light: "rgba(51, 51, 51, 0.3)", // #333333 with 0.3 opacity
  },
  accent: {
    red: "#EB5757",
    purple: "#C543CD",
    yellow: "#EDCA5D",
    orange: "#DB8B58",
    blue: "#3369C8",
    green: "#19812E",
  },
  black: "#1D1D1D",
  white: "#FFFFFF",
  gray: "#9C9C9C",
  background: "#D4E4FA",
};

// Yazı boyutları
export const FONT_SIZES = {
  xs: "14px",
  sm: "16px",
  md: "18px",
  lg: "20px",
  xl: "24px",
  "2xl": "28px",
  "3xl": "34px",
  "4xl": "42px",
  "5xl": "52px",
  "6xl": "64px",
  "7xl": "72px",
};

// Yaygın kullanılan değerler için kısaltmalar
export const theme = {
  colors: COLORS,
  fonts: {
    primary: "font-sf-pro-rounded",
  },
  fontSizes: FONT_SIZES,
  borderRadius: {
    full: "rounded-full",
    lg: "rounded-[20px]",
    md: "rounded-[15px]",
  },
  spacing: {
    section: "py-10 lg:py-20",
  },
  container: "container mx-auto px-4",
};
