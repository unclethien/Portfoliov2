import React, { useRef } from "react";
import {
  Typography,
  Box,
  Grid,
  Chip,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";
import { My_Education } from "@/data/education";
import Image from "next/image";

type EducationRefs = Array<React.RefObject<HTMLDivElement> | null>;

export default function TimelineEducation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const educationRefs = useRef<EducationRefs>(
    new Array(My_Education.length).fill(null)
  );

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
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
            Education
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            My educational journey has been a series of learning and growth
            experiences. This timeline highlights the institutions and
            qualifications that have shaped my academic and professional
            development.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: isMobile ? 0 : 5,
              },
            }}
          >
            {My_Education.map(
              (
                {
                  degree,
                  institution,
                  institutionLink,
                  thumbnail,
                  date,
                  content,
                },
                index
              ) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot />
                    {index < My_Education.length - 1 && <TimelineConnector />}
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
                      {degree}
                    </Typography>
                    <Typography variant="h6" className="mb-3">
                      <Link
                        href={institutionLink}
                        target="_blank"
                        rel="noreferrer"
                        color="text.primary"
                      >
                        {institution}
                      </Link>
                    </Typography>
                    {!isMobile && (
                      <Box className="my-3">
                        <Image
                          src={thumbnail}
                          alt={institution}
                          height={300}
                          width={600}
                        />
                      </Box>
                    )}
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
