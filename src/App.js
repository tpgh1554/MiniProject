import logo from "./logo.svg";
import "./App.css";
import Mypage from "./Mypage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mypage />} />
      </Routes>
    </Router>
  );
}

export default App;
