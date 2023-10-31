import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
      },
      primary: {
        100: "#d4d6db",
        200: "#a9adb7",
        300: "#7d8393",
        400: "#525a6f",
        500: "#27314b",
        600: "#1f273c",
        700: "#27314B",
        800: "#171d2d",
        900: "#0d121e"
      },

      secondary: {
        100: "#ffffff",
        200: "#ad99d6",
        300: "#8566c2",
        400: "#5c33ad",
        500: "#330099",
        600: "#29007a",
        700: "#1f005c",
        800: "#14003d",
        900: "#0a001f",
      },
      yellow: {
        100: "#ffffcc",
        200: "#ffff99",
        300: "#ffff66",
        400: "#ffff33",
        500: "#ffff00",
        600: "#cccc00",
        700: "#999900",
        800: "#666600",
        900: "#333300"
      },


      green: {
        100: "#ccffcc",
        200: "#99ff99",
        300: "#66ff66",
        400: "#33ff33",
        500: "#00ff00",
        600: "#00cc00",
        700: "#009900",
        800: "#006600",
        900: "#003300"
      },
    }
    : {
      grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
      },
      primary: {
        100: "#0d121e",
        200: "#10141e",
        300: "#171d2d",
        400: "#1f273c",
        500: "#27314b",
        600: "#525a6f",
        700: "#7d8393",
        800: "#a9adb7",
        900: "#ffffff",
      },
      secondary: {
        100: "#0a001f",
        200: "#14003d",
        300: "#1f005c",
        400: "#29007a",
        500: "#330099",
        600: "#5c33ad",
        700: "#8566c2",
        800: "#ad99d6",
        900: "#d6cceb",
      },
      yellow: {
        100: "#333300",
        200: "#666600",
        300: "#999900",
        400: "#cccc00",
        500: "#ffff00",
        600: "#ffff33",
        700: "#ffff66",
        800: "#ffff99",
        900: "#ffffcc",
      },

      green: {
        100: "#003300",
        200: "#006600",
        300: "#009900",
        400: "#00cc00",
        500: "#00ff00",
        600: "#33ff33",
        700: "#66ff66",
        800: "#99ff99",
        900: "#ccffcc",

      }

    }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.secondary[100],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default:"#000000",
          },
          colors:{
            colors
          }
        }
        : {
          // palette values for light mode
          primary: {
            main: colors.primary[100],
          },
          secondary: {
            main: colors.secondary[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: "#fcfcfc",
          },
          colors:{
            colors
          }
        }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
