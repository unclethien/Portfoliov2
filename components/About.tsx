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
import portrait_1 from "../public/potrait 1.jpeg";
import IconButton from "@mui/material/IconButton";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import ResponsiveGrid from "./ResponsiveGrid";

export default function Hero() {
  return (
    <Box
      id="hero"
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
              alt="potrait 1"
              src={portrait_1}
            />
          </Grid>
          <Grid item xs={8}>
            <Stack
              spacing={2}
              useFlexGap
              sx={{ width: { sm: "90%", md: "100%" } }}
            >
              <Typography
                variant="h1"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                  alignSelf: "center",
                  textAlign: "center",
                  fontSize: "clamp(3.5rem, 10vw, 4rem)",
                }}
              >
                I&apos;m&nbsp;
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: "clamp(3rem, 10vw, 4rem)",
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
                textAlign="center"
                color="text.secondary"
                variant="subtitle2"
                sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
              >
                I am a software engineer with a passion for food, a keen
                interest in 3D printing and custom keyboards, a love for
                technology, and a fondness for cats.
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                useFlexGap
                sx={{
                  color: "text.secondary",
                }}
              >
                <IconButton
                  color="inherit"
                  href="https://github.com/unclethien"
                  aria-label="GitHub"
                  sx={{ alignSelf: "center" }}
                >
                  <GithubIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://www.linkedin.com/in/utdthiennguyen/"
                  aria-label="LinkedIn"
                  sx={{ alignSelf: "center" }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="mailto:dxn210021@utdallas.edu"
                  aria-label="X"
                  sx={{ alignSelf: "center" }}
                >
                  <MailIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
