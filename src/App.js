import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import Result from "./components/Result";
import Test from "./components/Test";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/instructions" exact component={Instructions} />
        <Route path="/result" exact component={Result} />
        <Route path="/test" exact component={Test} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
