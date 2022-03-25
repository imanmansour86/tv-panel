import "./App.css";
import NavTabs from "./components/NavTabs/NavTabs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavTabs />
    </Router>
  );
}

export default App;
