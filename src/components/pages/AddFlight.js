import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import '../../assets/styles/addFlight.css';
import {addFlightToLocalStorage} from "../helpers/flightLocalStorage";
import Button from "../helpers/button";
import fetchFlightEstimate from "../helpers/fetchFlight";
import SelectInput from "../helpers/selectInput";
import {iataData} from "../../data/iataData.js";
import {classData} from "../../data/classData.js";

export default function AddFlight() {
  const [date, setDate] = useState(new Date());
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [estimateObject, setEstimateObject] = useState();
  const [showAddButton, setShowAddButton] = useState(false);
  const [airportOptions, setAirportOptions] = useState([]);
  const [cabinClassOptions, setCabinClassOptions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setAirportOptions(
      iataData.map((airport) => {
        let placeholder = `${airport.iata} (${airport.name})`;
        return {value: placeholder, label: placeholder};
      })
    );
  }, []);

  useEffect(() => {
    setCabinClassOptions(
      classData.map((c) => {
        let placeholder = `${c.class} (${c.name})`;
        return {value: placeholder, label: placeholder};
      })
    );
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (departure === "" || destination === "") {
      alert("Choose airport");
    } else {
      const airportDeparture = departure.slice(0, 3);
      const airportDestination = destination.slice(0, 3);
      const cabinClassOption = cabinClassOptions.slice(0, 3);
      const requestItem = {
        // passengers,
        date,
        cabinClassOption,
        airportDeparture,
        airportDestination,
      };

      fetchFlightEstimate(requestItem)
        .then((estimate) => {
          setEstimateObject(estimate);
          setShowAddButton(true);
        })
        .catch((error) => {
          console.log(error)
          alert("Ooops!!! Looks like it's impossible have this route");
        });
    }
  }

  function handleAddTrip() {
    const carbon = Math.round(estimateObject.data.attributes.carbon_kg);
    const distance = Math.round(estimateObject.data.attributes.distance_value);
    const tripItem = {
      // passengers,
      date,
      departure,
      destination,
      carbon,
      distance,
      cabinClassOptions
    };

    addFlightToLocalStorage(tripItem);
    setShowAddButton(false);
    navigate("/my_flight");
  }

  // function handlePassengerChange(event) {
  //   const {value} = event.target;
  //   if (value > 0) {
  //     setPassengers(value);
  //   } else setPassengers(0);
  // }

  function handleDateChange(date) {
    const newDate = date.target.value;
    setDate(newDate);
  }

  function handleDepartureChange(event) {
    const {value} = event;
    setDeparture(value);
  }

  function handleCabinClassChange(event) {
    const {value} = event;
    setCabinClassOptions(value);
  }

  function handleDestinationChange(event) {
    const {value} = event;
    setDestination(value);
  }

  function goToHome() {
    navigate("/");
  }

  function goToMyFlight() {
    navigate("/my_flight");
  }

  return (
    <div className="flight">
      <div className="flight_wrapper">
        <form className="flight_form" onSubmit={handleSubmit}>
          <label htmlFor="date">
            Select Date *
          </label>
          <input
            name="date"
            type="date"
            value={date}
            pattern="\d{4}-\d{2}-\d{2}"
            onChange={handleDateChange}
            required
          />

          <SelectInput
            label="Select Cabin Class "
            className="select"
            placeholder="Class of flight"
            options={cabinClassOptions}
            defaultValue={{label: "economy", value: 0}}
            onChange={handleCabinClassChange}
          />
          <SelectInput
            label="Select Departure Airport *"
            className="select"
            placeholder="Departure airport"
            options={airportOptions}
            onChange={handleDepartureChange}
          />
          <SelectInput
            label="Select Destination Airport *"
            className="select"
            placeholder="Destination airport"
            options={airportOptions}
            onChange={handleDestinationChange}
          />
          <div className="confirm_req">
            <Button text="Calculate CO2 emission"/>
            <p>* - required field</p>
          </div>
        </form>
        <div className="save">
          {showAddButton ? (
            <div>
              <div className="calc">
                <div>
                  CO<sub style={{color: "yellow"}}>2</sub> in kg:{" "}
                  {estimateObject && estimateObject.data.attributes.carbon_kg}
                </div>
              </div>
              {" "}
              <div className="calc">
                Distance in km:{" "}
                {estimateObject && estimateObject.data.attributes.distance_value}
              </div>
              <Button
                className="save btn"
                text="Add to My Trips"
                onClick={handleAddTrip}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="navigate_btn">
        <Button className="navigate btn" text="Home" onClick={goToHome}/>
        <Button className="navigate btn" text="My Flight" onClick={goToMyFlight}/>
      </div>
    </div>
  );
}
