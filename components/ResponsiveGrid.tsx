import React, { useState } from "react";
import { WidthProvider, Responsive, Layout } from "react-grid-layout";
import Box from "@mui/material/Box";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import _ from "lodash";
import { useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import { alpha, Container } from "@mui/material";

const ReactGridLayout = WidthProvider(Responsive);

const initialLayout: Layout[] = [
  { i: "a", x: 0, y: 0, w: 12, h: 2 },
  { i: "b", x: 0, y: 3, w: 4, h: 4 },
  { i: "c", x: 4, y: 3, w: 4, h: 2 },
  { i: "d", x: 8, y: 3, w: 4, h: 2 },
  { i: "e", x: 5, y: 4, w: 8, h: 2 },
];

const whiteLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
];

const darkLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
];

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

const ResponsiveGrid: React.FC = () => {
  const [layout, setLayout] = useState<Layout[]>(initialLayout);
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

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
        // height: { xs: 700, sm: 700 },
        width: { xs: "100%", sm: "90%", md: "80%" }, // Adjust width for different screen sizes
        backgroundSize: "cover",
        borderRadius: "10px",
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
        rowHeight={100}
        layouts={{ lg: layout }}
        isDraggable={true}
        isResizable={true}
        onLayoutChange={onLayoutChange}
      >
        <Box
          key="a"
          data-grid={layout.find((item) => item.i === "a")}
          sx={(theme) => ({
            border: "1px solid",
            borderColor: "grey.300",
            padding: 2,
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
            background: (theme) =>
              theme.palette.mode === "light" ? "" : "none",
            backgroundColor: "primary.contrastText",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
          })}
        >
          <Typography variant="body1" color="text.secondary">
            See what our customers love about our products. Discover how we
            excel in efficiency, durability, and satisfaction. Join us for
            quality, innovation, and reliable support.
          </Typography>
        </Box>
        <Box
          key="b"
          data-grid={layout.find((item) => item.i === "b")}
          sx={(theme) => ({
            border: "1px solid",
            borderColor: "grey.300",
            padding: 2,
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
            background: (theme) =>
              theme.palette.mode === "light" ? "" : "none",
            backgroundColor: "primary.contrastText",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            // boxShadow:
            //   theme.palette.mode === "light"
            //     ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
            //     : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        >
          b
        </Box>
        <Box
          key="c"
          data-grid={layout.find((item) => item.i === "c")}
          sx={(theme) => ({
            border: "1px solid",
            borderColor: "grey.300",
            padding: 2,
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
            background: (theme) =>
              theme.palette.mode === "light" ? "" : "none",
            backgroundColor: "primary.contrastText",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            // boxShadow:
            //   theme.palette.mode === "light"
            //     ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
            //     : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        >
          c
        </Box>
        <Box
          key="d"
          data-grid={layout.find((item) => item.i === "d")}
          sx={(theme) => ({
            border: "1px solid",
            borderColor: "grey.300",
            padding: 2,
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
            background: (theme) =>
              theme.palette.mode === "light" ? "" : "none",
            backgroundColor: "primary.contrastText",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            // boxShadow:
            //   theme.palette.mode === "light"
            //     ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
            //     : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        >
          d
        </Box>
        <Box
          key="e"
          data-grid={layout.find((item) => item.i === "e")}
          sx={(theme) => ({
            border: "1px solid",
            borderColor: "grey.300",
            padding: 2,
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
            background: (theme) =>
              theme.palette.mode === "light" ? "" : "none",
            backgroundColor: "primary.contrastText",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            // boxShadow:
            //   theme.palette.mode === "light"
            //     ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
            //     : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        >
          e
        </Box>
      </ReactGridLayout>
    </Container>
  );
};

export default ResponsiveGrid;
