import { useEffect, useState } from "react";

function useCurrencyInfo(curr) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-03-06/v1/currencies/{curr}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[curr]))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [curr]);

  return data;
}

export default useCurrencyInfo;
