import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from '../view/MainPage';
import Músicas from '../view/Músicas';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/"
              Component={MainPage}/>
              <Route path="/Músicas"
              Component={Músicas}/>
          </Routes>
      </Router>
    </>
  )
}

export default App