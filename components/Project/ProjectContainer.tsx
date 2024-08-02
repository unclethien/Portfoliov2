import React from "react";
import { generatePageMetadata } from "@/app/seo";
import { My_Project } from "@/data/project";
import Image from "next/image";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "View some of my notable open source web apps, npm packages, cli tools and more.",
});

type Props = {
  project: (typeof My_Project)[number];
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Card
      variant="outlined"
      key={project.title}
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        "&:hover": { backgroundColor: "background.default" },
      }}
    >
      <Image
        src={project.thumbnail}
        alt={`${project.title}`}
        style={{ width: "100%", height: "auto", borderRadius: "4px 4px 0 0" }}
        width={0}
        height={0}
        unoptimized
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>
        <Typography color="textSecondary" paragraph>
          {project.description}
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
          {project.tags.map((techStackItem) => (
            <Chip label={techStackItem} key={techStackItem} />
          ))}
        </Box>
        <Box display="flex" justifyContent="flex-end">
          {(project as { repo?: string }).repo && (
            <IconButton
              component="a"
              href={(project as { repo?: string }).repo}
            >
              <GitHubIcon />
            </IconButton>
          )}
          {(project as { external?: string }).external && (
            <IconButton
              component="a"
              href={(project as { external?: string }).external}
            >
              <LinkIcon />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default function Projects() {
  return (
    <Container>
      <section>
        <Typography variant="h4" component="h1" gutterBottom>
          Web apps
        </Typography>
        <Grid container spacing={4}>
          {My_Project.map((project, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </section>
    </Container>
  );
}
