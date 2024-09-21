import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #d9d6d6",
        borderBottomRightRadius: "3px",
        borderBottomLeftRadius: "3px",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              color: "black",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            navbarScroll
          >
            <Nav.Link
              style={{ padding: "0px 5px", width: "105px" }}
              href="#action1"
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              style={{ padding: "0px 5px", width: "105px" }}
              href="#action2"
            >
              Comunity
            </Nav.Link>
            <Nav.Link style={{ padding: "0px 5px", width: "105px" }} href="#">
              Resources
            </Nav.Link>
            <Nav.Link style={{ padding: "0px 5px", width: "105px" }} href="#">
              Pricing
            </Nav.Link>
            <Nav.Link style={{ padding: "0px 5px", width: "105px" }} href="#">
              Solution
            </Nav.Link>
            <Nav.Link style={{ padding: "0px 5px", width: "105px" }} href="#">
              Contact
            </Nav.Link>
          </Nav>

          <Button
            variant="outline-success"
            style={{
              fontWeight: "bold",
              backgroundColor: "whitesmoke",
            }}
          >
            Log in
          </Button>
          <Button
            variant="outline-success"
            style={{
              backgroundColor: "black",
              margin: "0px 6px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Register
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
