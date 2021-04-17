import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import Result from "./components/Result";
import Test from "./components/Test";
import Login from "./components/Login";
import { lightGreen } from "@material-ui/core/colors";
function App() {
  let stuName ="";
  function stuDetails(name){
stuName = name;
console.log(stuName);
  }
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/instructions" exact component={Instructions} />
        <Route path="/result" exact component={Result} />
        <Route path="/test" exact render={(props) => (
    <Test {...props} name={stuName} />
  )} />
        <Route path="/login" exact render={(props) => (
    <Login {...props} setStu={stuDetails} />
  )} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
