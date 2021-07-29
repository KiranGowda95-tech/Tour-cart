import "./styles.css";
import Home from "./Home";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
