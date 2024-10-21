import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from '../view/MainPage';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/"
              Component={MainPage}/>
          </Routes>
      </Router>
    </>
  )
}

export default App