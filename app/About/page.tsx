"use client";

import * as React from "react";
import { PaletteMode, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "@/components/NavBar";
import getLPTheme from "@/components/getLPTheme";
import Footer from "../../components/Footer";
import About from "../../components/About/About";

export default function Home() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline />
        <NavBar mode={mode} toggleColorMode={toggleColorMode} />
        <About />
        <Footer mode={mode}/>
      </ThemeProvider>
    </>
  );
}
