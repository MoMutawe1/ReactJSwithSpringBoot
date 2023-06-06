import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeesListComponent from "./component/EmployeesListComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import CreateEmployeeComponent from "./component/CreateEmployeeComponent";

// header and footer components created outside the switch, because header and footer aplicaple for all component across the application.
function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={EmployeesListComponent}></Route>
              <Route path="/employees" component={EmployeesListComponent}></Route>
              <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
