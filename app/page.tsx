"use client";

import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "@/components/NavBar";
import getLPTheme from "@/components/getLPTheme";
import Hero from "@/components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  const [mode, setMode] = React.useState<PaletteMode>(() => {
    return (localStorage.getItem("mode") as PaletteMode) || "light";
  });
  const [showCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("mode", newMode); // Save the new mode in localStorage
      return newMode;
    });
  };
  return (
    <>
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline />
        <NavBar mode={mode} toggleColorMode={toggleColorMode} />
        <Hero />

        <Footer mode={mode} />
      </ThemeProvider>
    </>
  );
}
