import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleClose = () => setExpanded(false);
  

  return (
    <Navbar expand="lg" className="navColor position-sticky top-0 start-0 z-3" expanded={expanded}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className={"tabs"} onClick={handleClose}>
           <img src={logo} alt="error" className="img-fluid"/>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav>
              <NavLink to="/" className={"tabs"} onClick={handleClose}>
                Home
              </NavLink>
            </Nav>
            <Nav>
              <Link to="/about" className={"tabs"} onClick={handleClose}>
                About
              </Link>
            </Nav>
            <Nav>
              <Link to="/blog" className={"tabs"} onClick={handleClose}>
                Blog
              </Link>
            </Nav>
            <Nav>
              <Link to="/menu" className={"tabs"} onClick={handleClose}>
                Menu
              </Link>
            </Nav>
            <Nav>
              <Link to="/contact" className={"tabs"} onClick={handleClose}>
                Contact
              </Link>
            </Nav>
            <Nav>
              <Link to="/reservation" onClick={handleClose}>
                <button className="myBtn bg-white text-black">Book Table</button>
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
