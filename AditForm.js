import { Button, Form, FormGroup ,FormControl } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';

const AditForm = ({theEmployee}) => {

     const { updateEmployee } = useContext(EmployeeContext);

        const employee = theEmployee;
        const id = employee.id;

        const [name , setName] = useState(employee.name);
        const [email , setEmail ]= useState (employee.email);
        const [adress , setAdress ]= useState (employee.adress);
        const [phone , setPhone ]= useState (employee.phone);

        const updatedEmployee = {id , name , email , adress , phone};

       const   handelSubmit = (e)=> {
            e.preventDefault();
            updateEmployee(id , updatedEmployee);
       }

    return (
        <Form onSubmit={handelSubmit}>
            <FormGroup>
            Name<FormControl name="name"  value={name} onChange={(e) =>setName(e.target.value)} type='text' placeholder='Name *' required>
                </FormControl>
            </FormGroup>
            <FormGroup>
                E-mail<FormControl name="email" value={email}  onChange={(e) =>setEmail(e.target.value)}type='email' placeholder='Email *' required>
                </FormControl>
            </FormGroup>
            <FormGroup>
                Adress<FormControl name="adress"  value={adress}  onChange={(e) =>setAdress(e.target.value)}as="textarea" placeholder='Adress *' rows={3}>

                </FormControl>
            </FormGroup>
            <FormGroup>
                Phone<FormControl name="phone" value={phone}  onChange={(e) =>setPhone(e.target.value)}type='text' placeholder='Phone *' required>

                </FormControl>
            </FormGroup>

            <Button variant='success' type='submit' >
                    Update Employee
            </Button>

        </Form>
    )
}

export default AditForm;