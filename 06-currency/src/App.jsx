import React,{ useCallback, useEffect, useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmt,setConvertedAmt] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options,setOptions] = useState([]);
  
  const currencyInfo = useCurrencyInfo(from);

  useEffect(() => {
    if (currencyInfo) {
      const currencyOptions = Object.keys(currencyInfo);
      setOptions(currencyOptions);
    }
  }, [currencyInfo]);


 useEffect(()=>{
  if(amount > 0 && currencyInfo[to]){
    setConvertedAmt(amount * currencyInfo[to])
  } 
 },[amount,from,to,currencyInfo]);
 
 const swap = () =>{
    setFrom(to)
    setTo(from)
 }

  return (
    <>
      <div className="converter-container">
      <h1>Currency Converter</h1>
        <div className="input-group">
        </div>
        <InputBox 
          label="From"
          amount={amount}
          currencyOptions={options}
          selectedCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          onChangeAmount={(amount) => setAmount(amount)}
        />
          <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
              <button className="swap-btn" onClick={swap}>Swap</button>
          </div>
        <InputBox 
          label="To"
          currencyOptions={options}
          selectedCurrency={to}
          disabled={true}
          onCurrencyChange={(currency) => setTo(currency)}
          amount={convertedAmt}
        />
      </div>
    </>
  )
}

export default App
