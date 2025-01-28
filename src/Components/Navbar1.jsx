// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FaSearch } from "react-icons/fa";

function NavScrollExample() {
  return (
    <Navbar expand="lg" sticky="top" className='border-b border-gray-300' style={{ backgroundColor: '#f9f5ec', padding: '20px' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><Logo/></Navbar.Brand>
        <Navbar.Toggle  style={{ color: "#b01c1a", borderColor: "#b01c1a" }} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="all-product">All-Products</Nav.Link>
            <NavDropdown title="Catagory" id="navbarScrollingDropdown"  >
              <NavDropdown.Item  
               style={{ backgroundColor: 'rgb(176, 28, 26)', color: 'white' }}  as={Link} to="/kansa">Kansa</NavDropdown.Item>
              <NavDropdown.Item  style={{ backgroundColor: 'rgb(176, 28, 26)', color: 'white' }}  as={Link} to="/pital">
               Pital
              </NavDropdown.Item>
              <NavDropdown.Item  style={{ backgroundColor: 'rgb(176, 28, 26)', color: 'white' }} as={Link} to="/copper">Copper</NavDropdown.Item>
              <NavDropdown.Item  style={{ backgroundColor: 'rgb(176, 28, 26)', color: 'white' }} as={Link} to="/aluminium">Aluminium</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  style={{ backgroundColor: 'rgb(176, 28, 26)', color: 'white' }} as={Link} to="/all-products">
              All Produts
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
        
<Form className="flex items-center space-x-2 mr-1">
  <Form.Control
    type="search"
    placeholder="Search"
    className="flex-grow px-4 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
    aria-label="Search"
  />
  <button
    type="submit"
    className="p-2 text-white bg-[#b01c1a] rounded-lg hover:bg-red-700 transition-colors duration-300"
    aria-label="Search"
  >
    <FaSearch />
  </button>
</Form>
          {/* //////////////// */}
          <div>
      <a
        href="https://wa.me/7649062706" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          color: "white",
          textDecoration: "none",
          fontSize: "24px",
        }}
      >
        <FaWhatsapp />
      </a>
    </div>
          {/* ////////////////// */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;