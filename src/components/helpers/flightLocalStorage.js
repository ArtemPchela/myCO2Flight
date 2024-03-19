import flightDate from "./flightDate";

export function getFlightsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("flightItems")) || [];
}

export function addFlightToLocalStorage(item) {
  const items = getFlightsFromLocalStorage();
  item.id = flightDate();
  items.push(item);
  localStorage.setItem("flightItems", JSON.stringify(items));
}

export function removeFlightFromLocalStorage(itemID) {
  const items = getFlightsFromLocalStorage();
  const newItems = items.filter((item) => {
    return item.id !== itemID;
  });
  localStorage.setItem("flightItems", JSON.stringify(newItems));
}

