import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const LogOut= () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                        <h1>Details page</h1>
                        <h1>{logindata[0].name}</h1>
                        <Button onClick={userlogout}>LogOut</Button>

                {
                    logindata[0].date === todayDate ? 
                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>:""
                }   
                     
                    </>
            }
        </>
    )
}

export default LogOut;






















