import * as React from "react";
import { alpha, Grid } from "@mui/material";
import Box from "@mui/material/Box";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";

export default function LeftAlignedTimeline() {
  return (
    <>
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Project
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
      >
        Over the past few years, I&apos;ve had the opportunity to work on a
        diverse array of projects, ranging from small-scale initiatives to major
        undertakings. This gallery showcases my most significant work, each
        representing unique challenges that have honed my skills as an emerging
        engineer. I invite you to explore these projects and reach out if
        anything catches your eye or sparks your curiosity. I&apos;m always
        eager to discuss my experiences and answer any questions you might have.
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
