"use client";

import * as React from "react";
import { alpha, PaletteMode, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import NavBar from "@/components/NavBar";
import getLPTheme from "@/components/getLPTheme";
import Footer from "../../components/Footer";
import LeftAlignedTimeline from "../../components/Experience/TimelineExperience";
import Container from "@mui/material/Container";

export default function ExperiencePage() {
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
        <Box
          sx={(theme) => ({
            width: "100%",
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
            <LeftAlignedTimeline />
            <Footer mode={mode}/>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
