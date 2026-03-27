export const palette = {
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09",
  },
  blue: {
    50: "#f0f4f8",
    100: "#d9e2ec",
    200: "#bcccdc",
    300: "#9fb3c8",
    400: "#829ab1",
    500: "#627d98",
    600: "#486581",
    700: "#334e68",
    800: "#243b53",
    900: "#102a43",
    950: "#0a1929",
  },
  sage: {
    50: "#f0f4f0",
    100: "#d3e0d3",
    200: "#b5ccb5",
    300: "#97b897",
    400: "#7da37d",
    500: "#648a64",
    600: "#4e6e4e",
    700: "#3a533a",
    800: "#273827",
    900: "#1a261a",
    950: "#0d150d",
  },
  red: {
    50: "#fdf2f2", 100: "#fce4e4", 200: "#f5c5c5",
    400: "#c97b7b", 500: "#b35656", 600: "#943c3c",
    700: "#7d2e2e",
  },
  amber: {
    50: "#fdf8ed", 100: "#f9edcc", 200: "#f0d89a",
    400: "#c9a84b", 500: "#b3923a", 600: "#94762a",
    700: "#7a5f1e",
  },
  emerald: {
    50: "#eef6f1", 100: "#d1e8d9", 200: "#a8d4b8",
    400: "#6db38a", 500: "#4e9970", 600: "#3a7d58",
    700: "#2d6346",
  },
} as const;

/** Intent カラーマッピング — コンポーネントが参照するセマンティックな色定義 */
export const intentColors = {
  light: {
    primary:   { base: palette.stone[900],   hover: palette.stone[800],   light: palette.stone[100],  lightHover: palette.stone[200],   fg: palette.stone[900],   contrast: "#ffffff" },
    secondary: { base: palette.stone[300],   hover: palette.stone[400],   light: palette.stone[100],  lightHover: palette.stone[200],   fg: palette.stone[700],   contrast: palette.stone[900] },
    danger:    { base: palette.red[600],     hover: palette.red[700],     light: palette.red[50],     lightHover: palette.red[100],     fg: palette.red[700],     contrast: "#ffffff" },
    success:   { base: palette.emerald[600], hover: palette.emerald[700], light: palette.emerald[50], lightHover: palette.emerald[100], fg: palette.emerald[700], contrast: "#ffffff" },
    warning:   { base: palette.amber[600],   hover: palette.amber[700],   light: palette.amber[50],   lightHover: palette.amber[100],   fg: palette.amber[700],   contrast: "#ffffff" },
  },
  dark: {
    primary:   { base: palette.stone[50],    hover: palette.stone[200],   light: palette.stone[800],   lightHover: palette.stone[700],   fg: palette.stone[50],    contrast: palette.stone[900] },
    secondary: { base: palette.stone[600],   hover: palette.stone[500],   light: palette.stone[800],   lightHover: palette.stone[700],   fg: palette.stone[300],   contrast: palette.stone[50] },
    danger:    { base: palette.red[400],     hover: palette.red[500],     light: palette.red[700],     lightHover: palette.red[600],     fg: palette.red[400],     contrast: palette.stone[950] },
    success:   { base: palette.emerald[400], hover: palette.emerald[500], light: palette.emerald[700], lightHover: palette.emerald[600], fg: palette.emerald[400], contrast: palette.stone[950] },
    warning:   { base: palette.amber[400],   hover: palette.amber[500],   light: palette.amber[700],   lightHover: palette.amber[600],   fg: palette.amber[400],   contrast: palette.stone[950] },
  },
} as const;

export const semanticColors = {
  light: {
    bg: {
      primary: palette.stone[50],
      secondary: palette.stone[100],
      tertiary: palette.stone[200],
      inverse: palette.stone[900],
    },
    fg: {
      primary: palette.stone[900],
      secondary: palette.stone[600],
      tertiary: palette.stone[500],
      inverse: palette.stone[50],
    },
    accent: {
      primary: palette.blue[600],
      secondary: palette.sage[600],
      "primary-hover": palette.blue[700],
      "secondary-hover": palette.sage[700],
    },
    border: {
      default: palette.stone[200],
      strong: palette.stone[300],
    },
    status: {
      error: palette.red[600],
      warning: palette.amber[600],
      success: palette.emerald[600],
    },
  },
  dark: {
    bg: {
      primary: palette.stone[900],
      secondary: palette.stone[800],
      tertiary: palette.stone[700],
      inverse: palette.stone[50],
    },
    fg: {
      primary: palette.stone[50],
      secondary: palette.stone[300],
      tertiary: palette.stone[400],
      inverse: palette.stone[900],
    },
    accent: {
      primary: palette.blue[300],
      secondary: palette.sage[300],
      "primary-hover": palette.blue[200],
      "secondary-hover": palette.sage[200],
    },
    border: {
      default: palette.stone[700],
      strong: palette.stone[600],
    },
    status: {
      error: palette.red[400],
      warning: palette.amber[400],
      success: palette.emerald[400],
    },
  },
} as const;
