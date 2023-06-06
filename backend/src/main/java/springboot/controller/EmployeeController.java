package springboot.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springboot.model.Employee;
import springboot.service.EmployeeService;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static springboot.constant.SystemConstants.*;

@Slf4j
@RestController
@CrossOrigin(origins = ORIGINS)
@RequestMapping(EMPLOYEE_END_POINT)
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping(EMPLOYEES)
    public List<Employee> getAllEmployees(){
        log.info("Retrieving all employees - EmployeeController.");
        return employeeService.getAllEmployees();
    }

    @GetMapping(EMPLOYEE_ID)
    public ResponseEntity<Optional<Employee>> getEmployeeById(@PathVariable Long id) {
        log.info("Retrieving employee profile for employee id: {} - EmployeeController", id);
        return employeeService.getEmployeeById(id);
    }

    @PostMapping(EMPLOYEES)
    public Employee createEmployee(@RequestBody Employee employee) {
        log.info("Creating new employee - EmployeeController.");
        return employeeService.createEmployee(employee);
    }

    @PutMapping(EMPLOYEE_ID)
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
        log.info("Update existing employee info - EmployeeController.");
        return employeeService.updateEmployee(id, employeeDetails);
    }

    @DeleteMapping(EMPLOYEE_ID)
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
        log.info("Delete employee info - EmployeeController.");
        return employeeService.deleteEmployee(id);
    }
}
