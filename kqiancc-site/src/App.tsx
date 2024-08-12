import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import Parking from './pages/ParkingBuster.tsx';

function App() {
  return (
    <Routes>
      {/* <Timer /> */}
       

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/second">Second Page</Link>
            </li>
          </ul>
        </nav> */}
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>} />
    </Routes>
    
  )
}

export default App
