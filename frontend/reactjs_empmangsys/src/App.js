import logo from "./logo.svg";
import "./App.css";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from "Switch" to "Routes"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
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
            {/* <Switch> tag replaced by <Routes> */}
            <Routes>
              <Route path="/" exact element={<EmployeesListComponent />}></Route>
              <Route path="/employees" element={<EmployeesListComponent />}></Route>
              <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
