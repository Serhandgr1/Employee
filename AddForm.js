import { Button, Form, FormGroup ,FormControl } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext);

      const handelSubmit = (e) => {
          e.preventDefault();
          addEmployee(newEmloyee)
      }     
  

    const onInputChange = (e) => {
        setNewEmployee({ ...newEmloyee, [e.target.name]: e.target.value })

    }


    const [newEmloyee, setNewEmployee] = useState({
       id:uuidv4(), name: "", email: "", adress: "", phone: "",
    });

    const { name, email, adress, phone } = newEmloyee;


    return (
        <Form onSubmit={handelSubmit}>
            <FormGroup>
                Name<FormControl name="name" value={name} onChange={e => onInputChange(e)} type='text' placeholder='Name *' required>

                </FormControl>
            </FormGroup>
            <FormGroup>
               E-mail<FormControl name="email" value={email} onChange={e => onInputChange(e)} type='email' placeholder='Email *' required>

                </FormControl>
            </FormGroup>
            <FormGroup>
                Adress<FormControl name="adress" value={adress} onChange={e => onInputChange(e)} as="textarea" placeholder='Adress *' rows={3}>

                </FormControl>
            </FormGroup>
            <FormGroup>
                Phone<FormControl name="phone" value={phone} onChange={e => onInputChange(e)} type='text' placeholder='Phone *' required>

                </FormControl>
            </FormGroup>

            <Button variant='success' type='submit' >
                Add New Employee
            </Button>

        </Form>
    )
}

export default AddForm;