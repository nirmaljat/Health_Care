import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";


function HealthInfo() {
  const [healthInfo, setHealthInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .post(`${server}/info/health`, {}, { withCredentials: true })
      .then((res) => {
        console.log(res)
        setHealthInfo(res.data.Info);
      })
      .catch((e) => {
        setError('Error fetching health information.');
      });
  }, []);

  return (
    <div className="info">
      <div>
        <h2>Health Information</h2>
        <p>Heart Rate: {healthInfo?.heartRate}</p>
        <p>Blood Pressure: {healthInfo?.bloodPressure}</p>
        <p>Sugar Level: {healthInfo?.sugarLevel}</p>
        <p>Recorded At: {healthInfo?.recordedAt}</p>
      </div>
    </div>
  );
}

export default HealthInfo;
