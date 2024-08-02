import React, { useRef } from "react";
import { Typography, Box, Grid, Chip, Link } from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";
import { My_Experience } from "@/data/experience";

type ExperienceRefs = Array<React.RefObject<HTMLDivElement> | null>;

export default function TimelineExperience() {
  const experienceRefs = useRef<ExperienceRefs>(
    new Array(My_Experience.length).fill(null)
  );

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography
            component="h2"
            variant="h4"
            color="text.primary"
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
            }}
          >
            Experience
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Throughout my career, I have gained invaluable experience by working
            with a variety of companies, each presenting its own unique
            challenges and opportunities for growth. This collection highlights
            my professional journey, showcasing the roles and responsibilities
            that have shaped me into the engineer I am today.
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 5,
              },
            }}
          >
            {My_Experience.map(
              ({ title, company, companyLink, date, tags, content }, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot />
                    {index < My_Experience.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      className="mb-0.5"
                    >
                      {date}
                    </Typography>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      component="span"
                    >
                      {title}
                    </Typography>
                    <Typography variant="h6" className="mb-3">
                      <Link
                        href={companyLink}
                        target="_blank"
                        rel="noreferrer"
                        color="text.primary"
                      >
                        {company}
                      </Link>
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                      {tags.map((techStackItem) => (
                        <Chip label={techStackItem} key={techStackItem} />
                      ))}
                    </Box>
                    <Box className="mb-5">
                      {Array.isArray(content)
                        ? content.map((item, idx) => (
                            <Typography
                              variant="body1"
                              color="text.primary"
                              key={idx}
                            >
                              {item}
                            </Typography>
                          ))
                        : content}
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              )
            )}
          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
}
