import { Toaster } from "react-hot-toast";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material/styles";

// routes
import Router from "./routes";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster position="bottom-right" reverseOrder={false} />
        <div className="app">
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
