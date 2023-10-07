import { Toaster } from "react-hot-toast";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
// routes
import Router from "./routes";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Toaster position="bottom-right" reverseOrder={false} />
          <main className="content">
          <Router />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
