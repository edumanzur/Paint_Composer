import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from '../view/MainPage';
import Login from '../view/Login';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/"
              Component={MainPage}/>
              <Route path="/Login"
              Component={Login}/>
          </Routes>
      </Router>
    </>
  )
}

export default App