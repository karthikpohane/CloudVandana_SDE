# Object-Oriented Programming - Employee Management System

Design a simple Java class `Employee` with the following attributes:
- `id` (integer)
- `name` (string)
- `salary` (double)

Create a method `displayDetails()` to print employee details.

### Example:

#### Output:
```
Employee Details:
=================
ID: 101, Name: Karthik, Salary: 55000.0
ID: 102, Name: Karthik Pohane, Salary: 62000.0
ID: 103, Name: Karthik Shankarrao Pohane, Salary: 48000.0
```

## Table of Contents
- [Implementation](#implementation)
- [How to Run](#how-to-run)
- [Screenshots](#screenshots)
- [Conclusion](#conclusion)

## Implementation
The program follows these steps:
1. Create an `Employee` class with attributes `id`, `name`, and `salary`.
2. Implement a method `displayDetails()` to print the employee details.
3. Create at least 3 Employee objects.
4. Store them in a list and display their details.

### Code: `EmployeeManagementSystem.java`
```java
import java.util.ArrayList;
import java.util.Iterator;

class Employee {
    private int id;
    private String name;
    private double salary;
    
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}

public class EmployeeManagementSystem {
    public static void main(String[] args) {
        Employee emp1 = new Employee(101, "Karthik", 55000.0);
        Employee emp2 = new Employee(102, "Karthik Pohane", 62000.0);
        Employee emp3 = new Employee(103, "Karthik Shankarrao Pohane", 48000.0);
        
        ArrayList<Employee> employeeList = new ArrayList<>();
        employeeList.add(emp1);
        employeeList.add(emp2);
        employeeList.add(emp3);
        
        System.out.println("Employee Details:");
        System.out.println("=================");
        
        for (Employee emp : employeeList) {
            emp.displayDetails();
        }
    }
}
```

## How to Run
1. Copy the Java code into a file named `EmployeeManagementSystem.java`.
2. Open a terminal or command prompt and navigate to the file's directory.
3. Compile the Java file using:
   ```sh
   javac EmployeeManagementSystem.java
   ```
4. Run the program using:
   ```sh
   java EmployeeManagementSystem
   ```
5. The employee details will be displayed in the output.

## Screenshots
![image](https://github.com/user-attachments/assets/580d1229-0fa4-46bd-976c-62df58d97131)

## Conclusion
- This program demonstrates basic object-oriented programming principles.
- It utilizes encapsulation by keeping employee attributes private and providing a method to display details.
- Using an `ArrayList` makes it easy to manage multiple employee objects dynamically.

