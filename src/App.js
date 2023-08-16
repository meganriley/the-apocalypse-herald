import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Sports from "./pages/Sports"
import Entertainment from "./pages/Entertainment"
import Classifieds from "./pages/Classifieds"


function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/sports" element={<Sports/>}/>
          <Route exact path="/entertainment" element={<Entertainment/>}/>
          <Route exact path="/classifieds" element={<Classifieds/>}/>
        </Routes>
    {/* </Router> */}
    </div>
  );
}

export default App;
