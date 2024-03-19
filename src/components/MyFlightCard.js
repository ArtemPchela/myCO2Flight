import "../assets/styles/myFlightCard.css";
import Chart from "./helpers/chart";
import {calculateSum} from "./helpers/calculateSum";
import {useState, useEffect} from "react";

const MyFlightCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState();
  const [flightSum, setFlightSum] = useState();
  const [flightSumMonth, setFlightSumMonth] = useState();
  const [flightSumLastYear, setFlightSumLastYear] = useState();
  const [totalSum, setTotalSum] = useState();

  useEffect(() => {
    const totalSumFlight = calculateSum("Total");
    const totalSumLastYear = calculateSum("The last year");
    const totalSumMonth = calculateSum("The last month");
    setTotalSum(totalSumFlight.flightSum);
    setFlightSum(totalSumFlight.flightSum);
    setFlightSumLastYear(totalSumLastYear.flightSum)
    setFlightSumMonth(totalSumMonth.flightSum)
  }, []);

  function handlePeriodChange(event) {
    const value = event.target.value;
    setSelectedPeriod(value);
    const totalSumFlight = calculateSum(value);
    setTotalSum(totalSumFlight.flightSum);
    setFlightSum(totalSumFlight.flightSum);
    setFlightSumMonth(totalSumFlight.flightSum)
    setFlightSumLastYear(totalSumFlight.flightSum)
  }

  return (
    <div className="flight_chart">
      <div className="flight_chart_wrapper">
        <h2>{totalSum} kg CO<sub style={{color: "yellow"}}>2</sub></h2>
        <select
          value={selectedPeriod}
          className="flight_chart_select"
          onChange={handlePeriodChange}
        >
          <option>Total</option>
          <option>The last year</option>
          <option>The last month</option>
        </select>
        <div>
          <Chart
            flightSum={flightSum}
            flightSumMonth={flightSumMonth}
            flightSumLastYear={flightSumLastYear}
          />
        </div>
      </div>
    </div>
  );
}

export default MyFlightCard;
