import * as React from "react";
import { alpha, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import portrait_2 from "../../public/potrait 2.jpeg";
import portrait_2_2 from "../../public/potrait 2-2.jpeg";
import IconButton from "@mui/material/IconButton";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import ResponsiveGrid from "../ResponsiveGrid";
import { space } from "postcss/lib/list";

export default function Hero() {
  return (
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
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            display: "flex",
            flexDirection: { sm: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={8} md={4}>
            <Image
              style={{
                width: "90%",
                height: "auto",
                borderRadius: "10px",
                padding: "10px",
              }}
              sizes="100wv"
              alt="potrait 2"
              src={portrait_2}
              className="hidden md:block"
            />
            <Image
              style={{
                width: "90%",
                height: "auto",
                borderRadius: "10px",
                padding: "10px",
              }}
              sizes="100wv"
              alt="potrait 2"
              src={portrait_2_2}
              className="block md:hidden"
            />
          </Grid>
          <Grid item xs={8}>
            <Stack
              spacing={2}
              useFlexGap
              sx={{ width: { sm: "90%", md: "100%" } }}
            >
              <Typography
                variant="subtitle2"
                fontStyle={"italic"}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                  alignSelf: "left",
                  textAlign: "left",
                  // fontSize: "clamp(3.5rem, 5vw, 4rem)",
                }}
              >
                &quot;If you&apos;re not scared, you&apos;re not taking a
                chance, and if you&apos;re not taking a chance, then what the
                hell are you doing?&quot;
              </Typography>
              <Typography
                component="span"
                variant="subtitle2"
                fontStyle={"italic"}
                sx={{
                  // fontSize: "clamp(3rem, 10vw, 4rem)",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "primary.main"
                      : "primary.light",
                  alignSelf: "right",
                  textAlign: "right",
                }}
              >
                Ted Mosby - How I Met Your Mother
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                  alignSelf: "left",
                  textAlign: "left",
                  // fontSize: "clamp(3.5rem, 10vw, 4rem)",
                }}
              >
                I&apos;m&nbsp;
                <Typography
                  component="span"
                  variant="h4"
                  sx={{
                    // fontSize: "clamp(3rem, 10vw, 4rem)",
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? "primary.main"
                        : "primary.light",
                  }}
                >
                  Thien Nguyen
                </Typography>
              </Typography>
              <Typography
                textAlign="left"
                color="text.secondary"
                variant="h6"
                sx={{ alignSelf: "left", width: { sm: "100%", md: "90%" } }}
              >
                As a software engineer, I thrive on pushing boundaries and
                embracing challenges. With expertise in programming, web
                development, machine learning, computer vision, LLMs, and data
                analysis, I&apos;m passionate about using technology to solve
                complex problems and create impactful solutions. Constantly
                seeking new opportunities to innovate, I believe that true
                growth happens outside our comfort zones, fueling my drive to
                make meaningful contributions.
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ width: { sm: "90%", md: "100%" }, marginTop: "20px" }}
            >
              <IconButton
                color="inherit"
                href="https://github.com/unclethien"
                aria-label="GitHub"
                sx={{ alignSelf: "left" }}
              >
                <GithubIcon />
                <Typography>&nbsp;Follow me on GitHub</Typography>
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com/in/utdthiennguyen/"
                aria-label="LinkedIn"
                sx={{ alignSelf: "left" }}
              >
                <LinkedInIcon />
                <Typography>&nbsp;Connect with me on LinkedIn</Typography>
              </IconButton>
              <IconButton
                color="inherit"
                href="mailto:dxn210021@utdallas.edu"
                aria-label="X"
                sx={{ alignSelf: "left" }}
              >
                <MailIcon />
                <Typography>&nbsp;Email me</Typography>
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
