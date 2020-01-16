import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries
} from "react-vis";

export default function Plot({ items }) {
  const data = [];
  items.map(item => {
    data.push({
      x: item.testCnt,
      y: item.purchaseCnt,
      size: (item.purchaseCnt / item.testCnt) * 100
    });
  });
  return (
    <XYPlot width={340} height={340}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <MarkSeries
        className="mark-series-example"
        strokeWidth={2}
        opacity="0.8"
        sizeRange={[5, 15]}
        data={data}
        color="#c10c3f"
      />
    </XYPlot>
  );
}
