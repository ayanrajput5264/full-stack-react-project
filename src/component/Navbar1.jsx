import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from '../assets/logo.png'
import { Routes,Route,Link,NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Contact from '../pages/Contact';
import "../App.css"

function Navbar1() {
  
  return (
    
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="space">
        <Navbar.Brand href="#"><img src={image} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" id='Home'>Home</Nav.Link>
            <Nav.Link href="/Product">Product</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>

           
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/Contact' element={<Contact />} />

            </Routes>
</>


  );
}

export default Navbar1;