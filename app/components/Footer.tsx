import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import logo from "../../public/Logo.svg";

const logoStyle = {
  width: "90px",
  margin: "0 10px",
  height: "auto",
  cursor: "pointer",
};

export default function Footer() {
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
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "60%" },
            display: "flex",
            justifyContent: { xs: "center", sm: "left" },
          }}
        >
          <Box>
            <Image alt="Profile Logo" src={logo} style={logoStyle} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderColor: "divider",
            py: { xs: 4, sm: 0 },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Link color="text.secondary" href="#">
            About
          </Link>
          <Link color="text.secondary" href="#">
            Project
          </Link>
          <Link color="text.secondary" href="#">
            Experience
          </Link>
          <Link color="text.secondary" href="#">
            Education
          </Link>
          <Link color="text.secondary" href="#">
            Blog
          </Link>
          <Link color="text.secondary" href="#">
            Contact
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
            {"Copyright © "}
            <Link href="#">Thien Nguyen&nbsp;</Link>
            {new Date().getFullYear()}
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
