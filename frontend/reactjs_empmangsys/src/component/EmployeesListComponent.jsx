import React, { Component } from "react";
import EmployeeService from "../service/EmployeeService";


class EmployeesListComponent extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      // define array called employees.
      employees: [],
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  
  //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  // So it's the best place where we can call our REST API (http calls).
  componentDidMount() {
    // when we call getEmployee() method and use axios library to make a service call
    // the getEmployee() will returns promise so we use .then() method with it.
    EmployeeService.getEmployees().then((res) => {
      // here we need to set the response we get from our service call to our employee array defined in the component state above.
      // we use the setState() method to set a data to the state of the component.
      this.setState({ employees: res.data });
    });
  }

  addEmployee() {
    this.props.history.push('/add-employee/_add');
  }

  viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`);
  }

  deleteEmployee(id){
    EmployeeService.deleteEmployee(id).then( res => {
      this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    });
  }

  editEmployee(id){
    this.props.history.push(`/add-employee/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center"> Employees List </h2>
        <div className="row">
          {/* defining an event handler addEmployee to handle onClick btn events, this event handler method need to bind inside the constructor */}
          <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee First Name </th>
                <th> Employee Last Name </th>
                <th> Employee Email Address </th>
                <th> Actions </th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.firstName} </td>
                  <td> {employee.lastName}</td>
                  <td> {employee.emailId}</td>

                  <td>
                    <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeesListComponent;
