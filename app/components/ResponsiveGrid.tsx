import * as React from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface ResponsiveGridProps {}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = () => {
  const [layout] = React.useState<Layout[]>([
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ]);

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      style={{ height: "100%" }}
    >
      <Box key="a" style={{ border: "1px solid black" }}>
        a
      </Box>
      <Box key="b" style={{ border: "1px solid black" }}>
        b
      </Box>
      <Box key="c" style={{ border: "1px solid black" }}>
        c
      </Box>
    </ResponsiveGridLayout>
  );
};

export default ResponsiveGrid;
