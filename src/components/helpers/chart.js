import "../../assets/styles/chart.css";
import React from "react";
import {Doughnut} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({flightSum, flightSumLastYear, flightSumMonth}) => {
  global.defaultFontColor = "white";

  return (
    <div>
      <Doughnut
        key={JSON.stringify([flightSum, flightSumLastYear, flightSumMonth])}
        className="chart"
        data={{
          labels: [`All Time ${flightSum}`, `The Last Month ${flightSumMonth}`, `The Last Year ${flightSumLastYear}`],
          datasets: [
            {
              label: "CO2 emission",
              data: [flightSum, flightSumLastYear, flightSumMonth],
              backgroundColor: ["green", "Blue", "yellow"],
              borderColor: ["transparent"],
              text: "24"
            },
          ],
        }}
        options={{plugins: {legend: {labels: {color: "white"}}}}}
        height={200}
        width={300}
      />
    </div>
  );
}

export default Chart;
