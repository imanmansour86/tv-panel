import "./App.css";
import NavTabs from "./components/NavTabs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        test
        <NavTabs></NavTabs>
      </div>
    </Router>
  );
}

export default App;
