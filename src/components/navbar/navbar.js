import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Modal from "react-modal";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './nvabar.css'


const NAVBAR = () => {

    const [namemodal, setNameModal] = useState(false);


    const openModal = (e) => {
        e.preventDefault();
        // setNameModal(true);
    };
    const closeModal = (e) => {

        setNameModal(false);
    };


    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top" >
                <Container fluid>
                    <Navbar.Brand className="mx-5" href="/">ATG.WORLD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex mx-auto position-relative" style={{ fontSize: '16px', width: '400px' }} >
                            <Form.Control
                                type="search"
                                placeholder="Search for your favorite groups in ATG"
                                className="me-2 rounded-pill"
                                aria-label="Search"
                                style={{ paddingLeft: "40px", backgroundColor: "#E9ECEF" }}
                            />
                            <SearchRoundedIcon className="position-absolute" style={{ top: '8px', left: "10px", cursor: "pointer", outline: "none" }} />
                        </Form>
                        <Nav
                            className="my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link href="/" onClick={(e) => openModal(e)} >Login</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal
                style={{ width: "50%" }}
                isOpen={namemodal}
                onRequestClose={() => setNameModal(false)}
            >
                <div className="modalheader">
                    <div className="cross">
                        <CloseOutlinedIcon onClick={(e) => closeModal(e)} />
                    </div>
                    <h1>Create Account</h1>
                </div>
                <hr />
                <div className="modalBody">
                    {/* <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form> */}
                </div>
                <hr />
            </Modal>
        </>
    )
}

export default NAVBAR;