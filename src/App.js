import logo from "./logo.svg";
import "./App.css";
import Mypage from "./Mypage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemInfo from "./MemInfo";
import SignOut from "./SignOut";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mypage />} />
        <Route path="/MemInfo" element={<MemInfo />} />
        <Route path="/SignOut" element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;
