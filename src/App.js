import "./App.css";
import Quiz from "./components/quiz";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/quiz" exat component={Quiz} />
    </Router>
  );
}

export default App;
