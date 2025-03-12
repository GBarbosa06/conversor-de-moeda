import { useState } from 'react'
import Converter from './components/Converter';

function App() {
  const [counter, setCounter] = useState(0);

  return(
    <div className='bg-neutral-600  flex justify-center min-h-screen min-w-screen p-6'>
      <Converter />
    </div>
  )

}

export default App

