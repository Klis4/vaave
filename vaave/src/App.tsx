import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

import MainPage from "./pages/MainPage";

import { CUSTOM_PALETTE } from "./assets/palette";

declare module '@mui/material/styles' {
  interface CustomColor {
    [colorName: string]: string;
  }
  interface Palette {
    custom: CustomColor
  }

  interface PaletteOptions {
    custom?: CustomColor
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
    custom: {
      ...CUSTOM_PALETTE
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage></MainPage>
    </ThemeProvider>
  );
}

export default App;
