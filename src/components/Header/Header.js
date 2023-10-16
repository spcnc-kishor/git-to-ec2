import Container from "react-bootstrap/Container";
import { Navbar, Button, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

function Header() {
  const dispatch = useDispatch();
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="me-auto">
          <Button
            variant="success"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
