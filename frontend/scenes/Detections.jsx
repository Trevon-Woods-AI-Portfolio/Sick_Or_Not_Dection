import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { useSocket } from "../context/socketContext";
import { useDispatch, useSelector } from "react-redux";
import { setDetections } from "../state/state";

const Detections = () => {
  const { socket, newDataFlag, setNewDataFlag } = useSocket();
  const dispatch = useDispatch();
  const detections = useSelector(state => state.detections)

  useEffect(() => {getDetections()}, [])
  useEffect(() => {
    socket?.on("newData", async () => {
      getDetections()
    })

  }, [socket]);

  const getDetections = async () => {
    try {
      const res = await fetch("https://health-risk-detector-back.onrender.com/api/data/detections", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const detections_found = await res.json();

      if (detections_found.error) {
        return console.log(
          "Error with received detections: ",
          detections_found.error
        );
      }

      dispatch(setDetections({ detections: detections_found }));

    } catch (error) {
      console.log("Error getting detections: ", error);
    }
  };

  return (
    <div className="text-black flex flex-col justify-center items-center mt-44 gap-3">
      {detections.detections?.map((data, index) => (
        <div
          className="border h-[4rem] w-[70%] flex justify-evenly items-center rounded-full shadow-md"
          key={index}
        >
          <Avatar
            alt="Profile Image"
            src={"../assets/Profile.jpeg"}
            sx={{ width: 45, height: 45 }}
            className="border border-2 border-blue-400"
          />
          <div
            className={`border-b-3 ${
              data.spO2 >= 95 && data.spO2 < 101
                ? "border-green-400"
                : data.spO2 >= 90 && data.spO2 < 95
                ? "border-yellow-400"
                : "border-red-400"
            } w-[2rem] flex justify-center items-center`}
          >
            {data.spO2}
          </div>
          <div
            className={`border-b-3 ${
              data.bp < 120
                ? "border-green-400"
                : (data.bp >= 120 && data.bp <= 129) ||
                  (data.bp >= 130 && data.bp <= 139)
                ? "border-yellow-400"
                : "border-red-400"
            } w-[2rem] flex justify-center items-center`}
          >
            {data.bp}
          </div>
          <div
            className={`border-b-3 ${
              data.bpm >= 60 && data.bpm <= 100
                ? "border-green-400"
                : (data.bpm >= 50 && data.bpm <= 59) ||
                  (data.bpm >= 101 && data.bpm <= 120)
                ? "border-yellow-400"
                : "border-red-400"
            } w-[2rem] flex justify-center items-center`}
          >
            {data.bpm}
          </div>
          <div
            className={`border-b-3 ${
              data.temp <= 37.2
                ? "border-green-400"
                : data.temp >= 37.3 && data.temp <= 37.9
                ? "border-yellow-400"
                : "border-red-400"
            } w-[2rem] flex justify-center items-center`}
          >
            {Math.round(((data.temp * 9) / 5 + 32) * 10) / 10}
          </div>
          <div
            className={`border h-2rem] w-[3rem] flex justify-center items-center rounded-full ${
              data.prediction == "High"
                ? "bg-red-400"
                : data.prediction == "Med"
                ? "bg-yellow-400"
                : "bg-green-400"
            } text-blue-100`}
          >
            {data.prediction}
          </div>
          <button className="border h-2rem] w-[4rem] rounded-full bg-blue-400 text-blue-100 hover:bg-zinc-900 hover:text-blue-400">
            Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Detections;
