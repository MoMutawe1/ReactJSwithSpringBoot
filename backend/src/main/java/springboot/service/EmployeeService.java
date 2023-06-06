package springboot.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import springboot.model.Employee;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface EmployeeService {

    List<Employee> getAllEmployees();
    ResponseEntity<Optional<Employee>> getEmployeeById(Long id);
    Employee createEmployee(@RequestBody Employee employee);
    ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails);
    ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id);
}
