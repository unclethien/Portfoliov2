import React, { useState, useCallback } from "react";
import { WidthProvider, Responsive, Layout } from "react-grid-layout";
import Box from "@mui/material/Box";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import _ from "lodash";
import { useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";

const ReactGridLayout = WidthProvider(Responsive);

const initialLayout: Layout[] = [
  { i: "a", x: 0, y: 0, w: 12, h: 2 },
  { i: "b", x: 9, y: 3, w: 4, h: 4 },
  { i: "c", x: 0, y: 3, w: 4, h: 2 },
  { i: "d", x: 4, y: 3, w: 4, h: 2 },
  { i: "e", x: 0, y: 4, w: 8, h: 2 },
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
        sx={{
          border: "1px solid black",
          padding: 2,
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>
      </Box>
      <Box
        key="b"
        data-grid={layout.find((item) => item.i === "b")}
        sx={{
          border: "1px solid black",
          padding: 2,
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        b
      </Box>
      <Box
        key="c"
        data-grid={layout.find((item) => item.i === "c")}
        sx={{
          border: "1px solid black",
          padding: 2,
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        c
      </Box>
      <Box
        key="d"
        data-grid={layout.find((item) => item.i === "d")}
        sx={{
          border: "1px solid black",
          padding: 2,
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        d
      </Box>
      <Box
        key="e"
        data-grid={layout.find((item) => item.i === "e")}
        sx={{
          border: "1px solid black",
          padding: 2,
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        e
      </Box>
    </ReactGridLayout>
  );
};

export default ResponsiveGrid;
