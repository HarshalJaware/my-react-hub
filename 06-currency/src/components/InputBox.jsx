import React from 'react';

function InputBox(props) {
  const { label, amount, setAmount,currencyOptions,selectedCurrency,onCurrencyChange,onChangeAmount ,disabled} = props;
  return (
    <div className="input-group">
        <label>From</label>
        <div className="flex-row">
            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e)=>onChangeAmount && onChangeAmount(e.target.value)}
                disabled={disabled}
                style={{ flex: 1 }}
            />
            <select value={selectedCurrency} onChange={(e)=>onCurrencyChange  && onCurrencyChange(e.target.value)}>
            {
               currencyOptions.map((currency)=>{
                 return (
                    <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                 );
               }) 
            }
            </select>
        </div>
    </div>
  );
}

export default InputBox;
