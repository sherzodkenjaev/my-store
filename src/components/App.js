import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../css/App.css";
import Basket from "./Basket";
import Header from "./Header";
import Home from "./Home";
import Search from "./Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/basket">
            <Header />
            <Basket />
          </Route>
          <Route path="/login">
            <h1>This is login page</h1>
          </Route>
          <Route path="/register">
            <h1>This is you know what</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
