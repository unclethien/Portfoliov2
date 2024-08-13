import React, { useState } from "react";
import { WidthProvider, Responsive, Layout } from "react-grid-layout";
import {
  Box,
  Chip,
  IconButton,
  Card,
  CardContent,
  Container,
  Link,
} from "@mui/material";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import _ from "lodash";
import { useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";
import { My_Project } from "@/data/project";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const ReactGridLayout = WidthProvider(Responsive);

const initialLayout: Layout[] = [
  { i: "0", x: 0, y: 0, w: 12, h: 9 },
  { i: "1", x: 0, y: 9, w: 6, h: 10 },
  { i: "2", x: 6, y: 9, w: 6, h: 10 },
];

const ResponsiveGrid: React.FC = () => {
  const [layout, setLayout] = useState<Layout[]>(initialLayout);
  const theme = useTheme();

  const onLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
    console.log("Layout changed:", newLayout);
  };

  return (
    <Container
      className="h-fit"
      sx={(theme) => ({
        mt: { xs: 8, sm: 10 },
        alignSelf: "center",
        width: { xs: "100%", sm: "90%", md: "80%" },
        backgroundSize: "cover",
        borderRadius: "10px",
        padding: 2,
        outline: "1px solid",
        outlineColor:
          theme.palette.mode === "light"
            ? alpha("#BFCCD9", 0.5)
            : alpha("#9CCCFC", 0.1),
        boxShadow:
          theme.palette.mode === "light"
            ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
            : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
      })}
    >
      <ReactGridLayout
        className="layout"
        breakpoints={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        layouts={{ lg: layout }}
        isDraggable={true}
        isResizable={true}
        onLayoutChange={onLayoutChange}
        draggableHandle=".drag-handle"
        resizeHandle={
          <Box className="resize-handle absolute bottom-7 right-1 w-0 h-0 cursor-grab rotate-90">
            <OpenInFullIcon color="primary" />
          </Box>
        }
      >
        {My_Project.slice(0, 3).map((project, idx) => (
          <Card
            key={idx}
            data-grid={layout.find((item) => item.i === idx.toString())}
            sx={(theme) => ({
              border: "1px solid",
              borderColor: "grey.300",
              padding: 2,
              textAlign: { sm: "left", md: "center" },
              backgroundColor: "background.default",
              outlineColor:
                theme.palette.mode === "light"
                  ? alpha("#BFCCD9", 0.5)
                  : alpha("#9CCCFC", 0.1),
            })}
          >
            <Image
              src={project.thumbnail}
              alt={`${project.title}`}
              style={{
                width: "auto",
                maxHeight: "300px",
                borderRadius: "4px 4px 0 0",
                margin: "auto",
                display: "flex",
              }}
              width={100}
              height={100}
              unoptimized
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                {project.title}
              </Typography>
              <Typography variant="caption" color="text.secondary" paragraph>
                {project.overal}
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                {project.tags.slice(0, 3).map((techStackItem) => (
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
                {(project as { demo?: string }).demo && (
                  <IconButton
                    component="a"
                    href={(project as { demo?: string }).demo}
                  >
                    <LinkIcon />
                  </IconButton>
                )}
              </Box>
            </CardContent>
            <Box
              className="drag-handle"
              sx={{
                position: "absolute",
                bottom: 15,
                left: 5,
                width: "15px",
                height: "15px",
                cursor: "grab",
              }}
            >
              <DragIndicatorIcon color="primary" />
            </Box>
          </Card>
        ))}
      </ReactGridLayout>
      <Link
        href="/projects"
        variant="subtitle1"
        color="primary"
        className="m-4"
      >
        View all projects
      </Link>
    </Container>
  );
};

export default ResponsiveGrid;
