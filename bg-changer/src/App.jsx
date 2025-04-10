import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  const colosrs = ["Red","Green","Blue","Yellow","Black","Orange"]

  return (
      <div style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}>
        <div>
          {
            colosrs.map((val)=>{
              let btnId = val.toLowerCase();
               return <button key={btnId} id={btnId} onClick={(e)=>setColor(e.target.id)}>{val}</button>
            })
          }
        </div>
      </div>
  )
}

export default App
