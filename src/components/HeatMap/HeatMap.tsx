import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface HeatmapProps {
  data: { x: number; y: number; value: number }[];
}

const HeatmapComponent: React.FC<HeatmapProps> = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const width = 800;
      const height = 600;
      const radius = 15;

      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height);

      const colorScale = d3
        .scaleSequential(d3.interpolateViridis)
        .domain([0, 1]);

      svg
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", radius)
        .attr("fill", (d) => colorScale(d.value))
        .attr("fill-opacity", 0.7);
    }
  }, []);

  return (
    <svg ref={svgRef} style={{ position: "absolute", top: 0, left: 0 }}></svg>
  );
};

export default HeatmapComponent;
