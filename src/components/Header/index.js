import { Nav, Navbar, NavDropdown, Container, Button, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import styles from './myStyles.module.css';
import {FiMenu} from 'react-icons/fi'
 
const options = [
    {
      name: 'SideBar',
      scroll: true,
      backdrop: false,
    },
  ];
 
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
 
    return (
      <Container className={styles.sideBar}>
 
        <Button variant="primary" onClick={toggleShow} className="me-2">
          <FiMenu size={25}/>
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    );
  }
 
  function SideBar() {
    return (
      <>
        {options.map((props, idx) => (
          <OffCanvasExample key={idx} {...props} />
        ))}
      </>
    );
  }
// NavBar Code
const NavBar = () => {
    return (
        <Navbar bg="danger" variant="dark" expand="lg">
            <Container>
                <SideBar/>
                <Navbar.Brand className={styles.BrandName}href="#home">Arrow</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">New</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Offers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Office</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
