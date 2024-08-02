import * as React from "react";
import { alpha, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import portrait_1 from "../public/potrait 1.jpeg";
import IconButton from "@mui/material/IconButton";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Mail";
import ResponsiveGrid from "./ResponsiveGrid";
import Card from "./Card";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";

export default function Hero() {
  const images = [
    "/images/Image 1.jpeg",
    "/images/Image 2.jpg",
    "/images/Image 3.jpeg",
    "/images/Image 4.jpg",
    "/images/Image 5.jpeg",
    "/images/Image 6.jpeg",
    "/images/Image 7.jpeg",
    "/images/Image 8.jpeg",
    "/images/Image 9.jpeg",
    "/images/Image 10.jpeg",
  ];

  const FAST_DURATION = 15;
  const SLOW_DURATION = 3000;

  const [duration, setDuration] = React.useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = React.useState(false);
  const [rerender, setRerender] = React.useState(false);

  React.useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setRerender(!rerender);
          setMustFinish(false);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

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
              <Box display={"flex"} justifyContent="center">
                <Button
                  color="primary"
                  variant="contained"
                  size="medium"
                  component="a"
                  href="/Thien-Nguyen_Resume.pdf"
                  target="_blank"
                >
                  Get my CV
                </Button>
              </Box>

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
                  <EmailIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
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
        </Grid>
        <Box className="py-16 w-screen overflow-hidden">
          <motion.div
            className="left-0 flex fex-row gap-4"
            ref={ref}
            style={{ x: xTranslation }}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...images, ...images, ...images, ...images].map((item, index) => (
              <Card image={item} key={index} />
            ))}
          </motion.div>
        </Box>

        <ResponsiveGrid />
      </Container>
    </Box>
  );
}
