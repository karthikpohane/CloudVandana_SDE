import java.util.ArrayList;
import java.util.List;

class Employee {
    private int id;
    private String name;
    private double salary;

    // Constructor
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: Rs. " + salary);
        System.out.println("-------------------------");
    }
}

public class EmployeeManagementSystem {
    public static void main(String[] args) {
        // Creating Employee objects
        Employee emp1 = new Employee(101, "Karthik", 55000.0);
        Employee emp2 = new Employee(102, "Karthik Pohane", 62000.0);
        Employee emp3 = new Employee(103, "Karthik Shankarrao Pohane", 48000.0);

        // Storing employees in a list
        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        // Displaying employee details
        System.out.println("Employee Details:");
        System.out.println("=================");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
