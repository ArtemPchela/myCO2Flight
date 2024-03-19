const FetchFlight = (requestFlight) => {
  const flightData = {
    type: "flight",
    passengers: requestFlight.passengers,
    legs: [
      {
        departure_airport: requestFlight.airportDeparture,
        destination_airport: requestFlight.airportDestination,
      },
    ],
  };

  const requestBody = JSON.stringify(flightData);
  const apiKey = "Bearer " + process.env.REACT_APP_CARBON_TOKEN;

  const headers = {
    "Content-Type": "application/json",
    Authorization: apiKey,
  }

  return fetch(process.env.REACT_APP_CARBON_URL_API, {
    method: "POST",
    headers,
    body: requestBody,
  }).then(response => response.ok ? response.json() : new Error());
}

export default FetchFlight;
