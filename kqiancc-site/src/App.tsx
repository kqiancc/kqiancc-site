import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/Home.tsx';

import Parking from './assets/parkingbuster.tsx';

import './App.css'

function App() {

  
  return (
    <Router>
      <div > 
      
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Parking />} />
        </Routes>
        
      
      </div>
    </Router>
  )
}

export default App
