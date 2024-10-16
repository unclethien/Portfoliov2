import * as React from "react";
import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import logoLight from "../public/LogoLight.svg";
import logoDark from "../public/LogoDark.svg";

const logoStyle = {
  width: "90px",
  margin: "0 10px",
  height: "auto",
  cursor: "pointer",
};
interface FooterProps {
  mode: PaletteMode;
}

export default function Footer({ mode }: FooterProps) {
  // Choose the appropriate logo based on the mode
  const logo = mode === "light" ? logoLight : logoDark;
  const router = useRouter();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        py: { xs: 8, sm: 10 },
        textAlign: "center",
        justifyContent: "center ",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "60%" },
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "left" },
          }}
        >
          <Image
            alt="Profile Logo"
            src={logo}
            style={logoStyle}
            onClick={() => router.push("/")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderColor: "divider",
            py: { xs: 4, sm: 4, md: 0 },
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Link color="text.secondary" href="/About" className="py-2">
            About
          </Link>
          <Link color="text.secondary" href="/Project" className="py-2">
            Project
          </Link>
          <Link color="text.secondary" href="/Experience" className="py-2">
            Experience
          </Link>
          <Link color="text.secondary" href="/Education" className="py-2">
            Education
          </Link>
          <Link color="text.secondary" href="/Blog" className="py-2">
            Blog(Comming Soon)
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 2, sm: 4 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Typography variant="body2" color="text.secondary" mt={1}>
            {"© "}
            {new Date().getFullYear()}&nbsp;
            <Link href="#">Thien Nguyen.</Link>
            {" All rights reserved."}
          </Typography>
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
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
      </Box>
    </Container>
  );
}
