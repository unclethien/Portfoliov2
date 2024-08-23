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
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function ProjectPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  React.useEffect(() => {
    // Access localStorage only on the client side
    const savedMode = localStorage.getItem("mode") as PaletteMode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const LPtheme = React.useMemo(() => createTheme(getLPTheme(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("mode", newMode); // Save the new mode in localStorage
      return newMode;
    });
  };

  return (
    <>
      <ThemeProvider theme={LPtheme}>
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
            <Typography variant="h4" component="h1" gutterBottom>
              My Projects
            </Typography>
            <Typography variant="body1" paragraph>
              Over the past few years, I&apos;ve had the opportunity to work on
              a wide range of projects, from small experiments to significant
              engineering challenges. I&apos;ve compiled a gallery showcasing
              many of these projects. Take a look, and if something catches your
              eye or sparks any questions, don&apos;t hesitate to reach out —
              I&apos;d love to chat!
            </Typography>
            <ProjectContainer />
            <Link
              href="/projects"
              variant="subtitle1"
              color="primary"
              className="m-4"
            >
              View all projects
            </Link>
            <Footer mode={mode} />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
