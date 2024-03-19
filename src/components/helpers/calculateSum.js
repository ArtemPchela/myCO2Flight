export function calculateSum(period) {
  let flightSum;
  if (period === "Total") {
    flightSum = calculateTotalSum("flightItems");
  } else if (period === "The last year") {
    flightSum = calculateYearSum("flightItems");
  } else if (period === "The last month") {
    flightSum = calculateMonthSum("flightItems");
  }
  return {
    flightSum,
  };
}

export function calculateTotalSum(flight) {
  let sum = 0;
  const flightSummary = JSON.parse(localStorage.getItem(flight)) || [];

  if (flightSummary.length > 0) {
    flightSummary.map((item) => {
      return sum = sum + item.carbon;
      // return sum;
    });
  } else {
    return sum;
  }
  return sum;
}

export function calculateYearSum(flight) {
  let sum = 0;
  const newDate = new Date();
  let year = newDate.getFullYear();
  newDate.setFullYear(year - 1);
  let newDateObject = Date.parse(newDate);
  const selectedType = JSON.parse(localStorage.getItem(flight)) || [];
  for (let i = 0; i < selectedType.length; i++) {
    let comparisonDate = Date.parse(selectedType[i].date);
    if (newDateObject < comparisonDate) {
      sum = sum + selectedType[i].carbon;
    }
  }
  return sum;
}

export function calculateMonthSum(flight) {
  let sum = 0;
  const newDate = new Date();
  let month = newDate.getMonth();
  newDate.setMonth(month - 1);
  let newDateObject = Date.parse(newDate);
  const selectedType = JSON.parse(localStorage.getItem(flight)) || [];
  for (let i = 0; i < selectedType.length; i++) {
    let comparisonDate = Date.parse(selectedType[i].date);
    if (newDateObject < comparisonDate) {
      sum = sum + selectedType[i].carbon;
    }
  }
  return sum;
}
