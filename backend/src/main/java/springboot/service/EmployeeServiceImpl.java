package springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import springboot.exception.ResourceNotFoundException;
import springboot.model.Employee;
import springboot.repository.EmployeeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@Primary
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public ResponseEntity<Optional<Employee>> getEmployeeById(Long id) {
        Optional<Employee> employee = Optional.ofNullable(employeeRepository.findById(id))
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return ResponseEntity.ok(employee);
    }

    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public ResponseEntity<Employee> updateEmployee(Long id, Employee employeeDetails) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());

        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
