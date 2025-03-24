import React, { useId } from "react";
import "./input.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const id = useId();

  return (
    <div className={`cover ${className}`}>
      <div className="cover2">
        <label htmlFor={id} className="label">
          {label}
        </label>
        <input
          id={id}
          className="amount"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value) || 0)
          }
        />
      </div>
      <div className="currencytype">
        <p>Currency Type</p>
        <select
          className="select"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
