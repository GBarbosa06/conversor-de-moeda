import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);

  return(
    <div>
      <button className='w-3xs bg-amber-400 border-2 border-amber-950 hover:bg-amber-700 transition-all'
      onClick={() => setCounter((counter => counter +1))}>
        Counter on {counter}</button>
        <button></button>
    </div>
  )

}

export default App

