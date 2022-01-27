// import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "antd/dist/antd.min.css";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
