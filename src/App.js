import { Toaster } from "react-hot-toast";
import { ColorModeContext, useMode,tokens } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

// routes
import Router from "./routes";

export default function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  // Access the primary color from your theme
  const primaryColor = colors.grey[900];
  const secondaryColor = colors.primary[100];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Toaster
            position="bottom-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                border: `1px solid ${primaryColor}`,
                padding: '16px',
                backgroundColor: primaryColor,
                color:secondaryColor
              },
            }}
          />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
