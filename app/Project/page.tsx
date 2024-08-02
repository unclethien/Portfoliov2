"use client";

import * as React from "react";
import { alpha, PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "@/components/NavBar";
import getLPTheme from "@/components/getLPTheme";
import Footer from "../../components/Footer";
import Container from "@mui/material/Container";
import ProjectContainer from "../../components/Project/ProjectContainer";

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
        <Box
          sx={(theme) => ({
            backgroundImage:
              theme.palette.mode === "light"
                ? "linear-gradient(180deg, #CEE5FD, #FFF)"
                : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
            backgroundSize: "100% 20%",
            backgroundRepeat: "no-repeat",
          })}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              pt: { xs: 14, sm: 20 },
              pb: { xs: 8, sm: 12 },
            }}
          >
            <NavBar mode={mode} toggleColorMode={toggleColorMode} />
            <ProjectContainer />
            <Footer mode={mode}/>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
