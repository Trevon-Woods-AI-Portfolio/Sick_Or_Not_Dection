import React from "react";
import Avatar from "@mui/material/Avatar";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HelpIcon from '@mui/icons-material/Help';
import ForumIcon from '@mui/icons-material/Forum';
import { useDispatch } from "react-redux";

const Sidebar = ({setChangeGrid, changeGrid}) => {
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen w-[15.5%] bg-zinc-900 border-r border-blue-400 shadow-md shadow-r shadow-blue-300">
      <div className="flex justify-between items-center p-4">
        <Avatar
          alt="Profile Image"
          src={"../assets/BioImpulse_Logo.png"}
          sx={{ width: 65, height: 65 }}
          className="border border-2 border-blue-400"
        />
        <div className="relative left-7 cursor-pointer border border-black text-zinc-900 rounded-xl bg-blue-400 hover:bg-blue-100 shadow-xl z-10">
          <KeyboardArrowLeftIcon />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2 p-4">
        <div className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-blue-700 ${changeGrid === "Detections" && "bg-zinc-700"}`}>
          <DashboardIcon className="text-blue-400" />
          <p className="text-blue-100 font-semibold">Detections</p>
        </div>
        <div className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-blue-700 ${changeGrid === "Insights" && "bg-zinc-700"}`}>
          <AutoAwesomeIcon className="text-blue-400" />
          <p className="text-blue-100 font-semibold">Insights</p>
        </div>
        <div className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-blue-700 ${changeGrid === "Analysis" && "bg-zinc-700"}`}>
          <InsightsIcon className="text-blue-400" />
          <p className="text-blue-100 font-semibold">Analysis</p>
        </div>
        <div className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-blue-700 ${changeGrid === "News" && "bg-zinc-700"}`}>
          <QuestionMarkIcon className="text-blue-400" />
          <p className="text-blue-100 font-semibold">TBD</p>
        </div>
        <div className={`flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-blue-700 ${changeGrid === "Insights" && "bg-zinc-700"}`}>
          <QuestionMarkIcon className="text-blue-400" />
          <p className="text-blue-100 font-semibold">TBD</p>
        </div>
        <div className="border-b border-blue-100"></div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-blue-700">
          <SupportAgentIcon className="text-blue-400" />
          <p className="text-blue-100 font-semibold">Support</p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-blue-700">
          <HelpIcon className="text-blue-400" />
          <p className="text-blue-100 font-semibold">Help Center</p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-blue-700">
          <ForumIcon className="text-blue-400" />
          <p className="text-blue-100 font-semibold">Forum</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
