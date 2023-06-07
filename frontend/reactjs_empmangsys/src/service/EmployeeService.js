import axios from "axios";

// rest api endpoint url from our backend project.
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeServices {
  
  // axios library provide some apis to consume backend services.
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  createEmployee(employee){
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  getEmployeeById(employeeId){
    return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
  }

  updateEmployee(employee, employeeId){
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
  }

  deleteEmployee(employeeId){
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
  }
}

// export an object of this class to our components not the class itself.
export default new EmployeeServices();
