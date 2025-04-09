import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const add = () =>{
    console.log("ADD Operation")
    if(count !== 20){
      setCount(count  + 1)
    }
  }

  const remove = () =>{
    console.log("Remove Operation")
    if(count !== 0){
      setCount(count  - 1);
    }
  }

  return (
    <>
      <h1>Hooks in React</h1>
      <p>Counter: {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
