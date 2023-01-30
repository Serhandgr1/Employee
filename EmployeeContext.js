import { createContext , useState , useEffect} from "react";
import axios from "axios";

export const EmployeeContext = createContext(); 

const EmployeeContextProvider = (props) => {
    
    const [employees , setEmployees] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get("http://localhost:3002/employee");
            setEmployees(response.data);
        };
        getUsers(); 
      }, [employees.length]);



      const  addEmployee= async (newEmloyee) => {
        await axios.post(`http://localhost:3002/employee` , newEmloyee);
            setEmployees(employees.concat([newEmloyee]));
       }
       const deleteEmployee= async (id) =>{
            await axios.delete(`http://localhost:3002/employee/${id}`);
            const newEmployeeList = employees.filter(m => m.id !== id);
            setEmployees(newEmployeeList);
       }

       const updateEmployee = async (id , updatedEmployee ) => {       
                console.log(id);
                console.log(updatedEmployee);
                const updateEmployee = (employees.map((employee)=> (employee.id === id ? updatedEmployee : employee )));
                const newEmployee = updateEmployee.map((employee) => employee.id === id ? axios.put(`http://localhost:3002/employee/${id}`, employee): employees);
                console.log(newEmployee);
                setEmployees(employees.concat([newEmployee]));
            }

    return(
        <EmployeeContext.Provider value={{employees , addEmployee , deleteEmployee , updateEmployee}}>

            {props.children}

        </EmployeeContext.Provider>
    )
}

export  default EmployeeContextProvider;