import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  // Swap currency selection and recalculate
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount * (currencyInfo[to] || 1));
  };

  // Convert currency
  const handleConversion = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };
  console.log("Currency Info:", currencyInfo);
  console.log("Options:", options);

  return (
    <div className="covere">
      <div className="h1">
        <h1>Currency Converter </h1>
        <h3>bro dekh ke bta kesa hai </h3>
      </div>
      <div className="cover2">
        <div className="anothercover">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConversion();
            }}>
            <div className="in">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={setFrom}
                selectCurrency={from}
                onAmountChange={(amt) => setAmount(Math.max(0, Number(amt)))} // Ensure no negative numbers
              />
            </div>
            <div className="btno">
              <button type="button" className="btn" onClick={swap}>
                Swap
              </button>
            </div>
            <div className="btn1">
              <InputBox
                label="To"
                amount={convertedAmount.toFixed(2)} // Format output
                currencyOptions={options}
                onCurrencyChange={setTo}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="btn2">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
