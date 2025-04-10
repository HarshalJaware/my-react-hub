import { useState,useCallback, useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = () =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed){
      str += "0123456789";
    }

    if(charAllowed){
      str += "~`!@#$%^&*()_+-=/,.;:'\\\"[]{}|";
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
}

  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed]);

  const handleCopy = () =>{
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  }

  return (
    <>
      <h1>Password Generator</h1>
      <div style={{"textAlign":"center"}}>
        <div>
          <input type="text" value={password} placeholder='password' readOnly />
          <button onClick={handleCopy}>Copy</button>
        </div>
        <div>
          <input type="range" min={6} max={100} value={length} onChange={(e)=>setLength(e.target.value)}/>
          <label>Length({length})</label> &nbsp;
          <label htmlFor="numInput">Number </label>
          <input id="numInput" type="checkbox" defaultChecked={numAllowed} onChange={()=>setNumAllowed((prev)=>!prev)}/>&nbsp;

          <label htmlFor="charInput">Character </label>
          <input id="charInput" type="checkbox" defaultChecked={charAllowed} onChange={()=>setCharAllowed((prev)=>!prev)}/>
        </div>
      </div>
    </>
  )
}

export default App
