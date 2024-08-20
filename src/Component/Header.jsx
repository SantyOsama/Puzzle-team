import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleSelectLink = () => {
    // Close the offcanvas menu
    setIsOffcanvasOpen(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <div
              className="logo-container"
              style={{
                color: "#cc0db1",
                fontStyle: "italic",
                fontFamily: "fantasy",
              }}
            >
              Puzzle Team
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setIsOffcanvasOpen(true)} // Open offcanvas menu
          />
          <Navbar.Collapse id="offcanvasNavbar" style={{ direction: "rtl" }}>
            <Nav className="ms-auto d-flex gap-3 d-none d-lg-flex">
              <Nav.Link
                as={NavLink}
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleSelectLink} // Close offcanvas menu on link click
              >
                الصفحة الرئيسية
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/info"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleSelectLink}
              >
                بعض المعلومات عن الفريق
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/team"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleSelectLink}
              >
                أعضاء الفريق
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/vision"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleSelectLink}
              >
                رؤيتنا
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleSelectLink}
              >
                تواصل معنا
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="d-lg-none"
            show={isOffcanvasOpen}
            onHide={() => setIsOffcanvasOpen(false)} // Close offcanvas menu
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <div
                  className="logo-container"
                  style={{
                    color: "#cc0db1",
                    fontStyle: "italic",
                    fontFamily: "fantasy",
                    marginTop: "20px",
                  }}
                >
                  Puzzle Team
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ direction: "rtl" }}>
              <Nav className="flex-column">
                <Nav.Link
                  as={NavLink}
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={handleSelectLink}
                >
                  الصفحة الرئيسية
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/info"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={handleSelectLink}
                >
                  بعض المعلومات عن الفريق
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/team"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={handleSelectLink}
                >
                  أعضاء الفريق
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/vision"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={handleSelectLink}
                >
                  رؤيتنا
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={handleSelectLink}
                >
                  تواصل معنا
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
