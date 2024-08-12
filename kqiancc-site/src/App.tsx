import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';


function App() {
  return (
    <Routes>
      
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>} />
    </Routes>
    
  )
}

export default App
