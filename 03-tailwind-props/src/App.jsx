import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400'>Tailwind Test</h1>
      <Card username="John Doe" btnText="Hello John Doe"/>
      <Card username="Hony Doe" btnText="Hello Hony Doe"/>
      <Card username="HonySD Doe" />
    </>
  )
}

export default App
