
 import React,{useState} from 'react'
 import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
    const[log]=useState(true);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img src='https://pngimg.com/uploads/netflix/netflix_PNG10.png' alt='page not found' height="40px"/>
                 Netflix</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="action2">Link</Nav.Link>
                       
                       
                    </Nav>
                    {(log)?<button className='btn btn-info mx-3'>Login</button>:
                    <button className='btn btn-warning mx-3'>Wallet</button>
                    }
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="warning">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;