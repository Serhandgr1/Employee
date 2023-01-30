import Employee from "./Employee";
import {useContext, useEffect, useState , } from 'react';
import {EmployeeContext} from "../contexts/EmployeeContext";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import AddForm from "./AddForm";
import { v4 as uuidv4 } from 'uuid';

const EmployeeList = () => {

    const [show,setShow ] = useState(false);

  const handelClose =()=> setShow(false);

  const handelShow=()=> setShow(true);

    const  {employees} = useContext(EmployeeContext);

     useEffect(()=>{
        handelClose();
     },[employees]);

    return (
    <div>
         <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                  <Button onClick={handelShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                </div>
              </div>
            </div>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee)=> (
                    <tr key={uuidv4()}><Employee employee={employee}/></tr>
                ))}
            </tbody>

        </table>
        <Modal show={show} onHide={handelClose}>
            <ModalHeader className="modal-header" closeButton>
                <ModalTitle>
                    Add Empolyee
                </ModalTitle>
                </ModalHeader>
                
                <ModalBody>
                        <AddForm/>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={handelClose} > 
                        Close Modal  
                    </Button>
                </ModalFooter>
        </Modal>
    </div>
    )
}

export default EmployeeList;