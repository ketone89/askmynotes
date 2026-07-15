import { useState } from "react";

function App() {

  const [employees, setEmployees] = useState([]);

  const [name, setName] = useState("");

  const [department, setDepartment] = useState("");

  const [salary, setSalary] = useState("");

  const addEmployee = () => {

    if (
      !name ||
      !department ||
      !salary
    )
      return;

    const employee = {
      name,
      department,
      salary,
    };

    setEmployees([...employees, employee]);

    setName("");
    setDepartment("");
    setSalary("");

  };

  const deleteEmployee = (index) => {

    setEmployees(
      employees.filter((_, i) => i !== index)
    );

  };

  return (
    <>
      <h1>Employee Management System</h1>

      <input
        data-testid="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Employee Name"
      />

      <input
        data-testid="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Department"
      />

      <input
        data-testid="salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Salary"
      />

      <button onClick={addEmployee}>
        Add Employee
      </button>

      {employees.length === 0 ? (
        <p data-testid="empty">
          No Employees Found
        </p>
      ) : (
        <table data-testid="employee-table" border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                <td>
                  <button
                    onClick={() => deleteEmployee(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;