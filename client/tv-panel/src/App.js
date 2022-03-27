import "./App.css";
import NavTabs from "./components/NavTabs/NavTabs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <Router>
      <NavTabs />
      <Landing />
    </Router>
  );
}

export default App;
