import axios from "axios";

// rest api endpoint url from our backend project.
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeServices {
  // axios library provide some apis to consume backend services.
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
}

// export an object of this class to our components not the class itself.
export default new EmployeeServices();
