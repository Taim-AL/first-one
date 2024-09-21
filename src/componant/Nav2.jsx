import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "../assets/images/logo.png"
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className="w-50" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="SERVICES" id="collasible-nav-dropdown"  menuVariant="dark" >
              <NavDropdown.Item href="#action/3.1" >AANBOUW</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">VERBOUW</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"> RENOVATIE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">ONDERHOUD</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">RENOVATIE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">BADKAMERS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PROJECTEN" id="collasible-nav-dropdown"  menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">WINKELINRICHTING</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">DAKWERK</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"> ELECTRA</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">STUKADOORSWERK</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">OVER ONS</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;