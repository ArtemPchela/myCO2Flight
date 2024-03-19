import "../assets/styles/flightListItem.css";

const FlightListItem = (props) => {
  const {id, date, departure, destination, carbon, distance, onRemove, cabinClassOptions} = props;
  const options = {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'};
  const newDate = new Date(date).toLocaleDateString('en-En', options);

  return (
    <div className="flight_list_item">
      <div className="flight_date">{newDate}</div>
      <div className="flight_id">Flight ID: {id}</div>
      <div className="flight_destination">
        <div>from: {departure}</div>
        {" "}
        <br/>
        <div>to: {destination}</div>
      </div>
      <p className="paragraph">Flight Class: {cabinClassOptions?.label}</p>
      <p>CO<sub style={{color: "yellow"}}>2</sub>: {carbon} kg </p>
      <p>Distance: {distance} km </p>
      <div className="flight_delete" onClick={onRemove}>Delete Flight</div>
    </div>
  );
}

export default FlightListItem;
