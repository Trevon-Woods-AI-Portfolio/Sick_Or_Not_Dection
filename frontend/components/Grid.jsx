import React from "react";
import Toolbar from "./Toolbar";
import Detections from "../scenes/Detections";
import Insights from "../scenes/Insights";
import Analysis from "../scenes/Analysis";

const Grid = ({ changeGrid }) => {
  return (
    <div className="relative h-dvh w-[84.5%] overflow-auto">
      <Toolbar />
      {changeGrid === "Detections" && <Detections />}
      {changeGrid === "Insights" && <Insights />}
      {changeGrid === "Analysis" && <Analysis />}
    </div>
  );
};

export default Grid;
