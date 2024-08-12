import { useState } from 'react'
// import tigerLogo from './assets/tiger.jpeg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
     
      <h1>Hi! I'm Katherine Chacon Cai, </h1>
      <h2>a UVA Student majoring in CS and minoring in English.</h2>
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App
