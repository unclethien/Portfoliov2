"use client";

import * as React from "react";
import { PaletteMode, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "@/components/NavBar";
import getLPTheme from "@/components/getLPTheme";
import Footer from "../../components/Footer";
import About from "../../components/About/About";

export default function AboutPage() {
  const [mode, setMode] = React.useState<PaletteMode>(() => {
    return (localStorage.getItem('mode') as PaletteMode) || 'light';
  });

  const LPtheme = React.useMemo(() => createTheme(getLPTheme(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem('mode', newMode); // Save the new mode in localStorage
      return newMode;
    });
  };

  return (
    <>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <NavBar mode={mode} toggleColorMode={toggleColorMode} />
        <About />
        <Footer mode={mode} />
      </ThemeProvider>
    </>
  );
}
