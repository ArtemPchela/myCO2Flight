import { useState } from "react";
import FlightListItem from "./FlightListItem";
import "../assets/styles/flightList.css";
import {
  getFlightsFromLocalStorage,
  removeFlightFromLocalStorage,
} from "./helpers/flightLocalStorage";

const FlightList = () => {
  const [flightTripItems, setFlightTripItems] = useState(
    getFlightsFromLocalStorage
  );

  function handleRemoveFlightItem(itemID) {
    removeFlightFromLocalStorage(itemID);
    setFlightTripItems(getFlightsFromLocalStorage());
  }

  return (
    <div className="flight_list">
      {flightTripItems.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
        .map((item) => {
          return (
            <FlightListItem
              key={item.id}
              id={item.id}
              date={item.date}
              cabinClassOptions={item?.cabinClassOptions}
              departure={item.departure}
              destination={item.destination}
              distance={item.distance}
              carbon={item.carbon}
              onRemove={() => handleRemoveFlightItem(item.id)}
            />
          );
        })
      }
    </div>
  );
}

export default FlightList;
