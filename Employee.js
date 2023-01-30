import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext , useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import AditForm from "./AditForm";


const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext);

    const [show,setShow ] = useState(false);

    const handelClose =()=> setShow(false);
  
    const handelShow=()=> setShow(true);

    useEffect (()=>{
        handelClose();
    } , [employee]);

    return (
        <>

            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.adress}</td>
            <td>{employee.phone}</td>
            <td>
                <button  onClick={handelShow}  className="btn text-warning " data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger " data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </td>

            <Modal show={show} onHide={handelClose}>
                <ModalHeader className="modal-header" closeButton>
                    <ModalTitle>
                            updateEmployee
                    </ModalTitle>
                </ModalHeader>

                <ModalBody>
                    <AditForm theEmployee={employee}/>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary"  onClick={handelClose}>
                        Close Modal
                    </Button>
                </ModalFooter>
            </Modal>

        </>

    )
}

export default Employee;