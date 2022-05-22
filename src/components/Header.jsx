import React, { useState } from "react";
import constData from "../utils/AppConstants";
import {
  Form,
  Navbar,
  Row,
  Col,
  Container,
  Offcanvas,
  Nav,
  Button,
  Image,
  Modal,
} from "react-bootstrap";

import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <div className="header">
        <Container>
          <Row>
            <Col>
              {["lg"].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                  <Container fluid className="p-0">
                    <Navbar.Brand href="#">
                      <Image src={constData.Logo}></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title
                          id={`offcanvasNavbarLabel-expand-${expand}`}
                        >
                          Offcanvas
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                          <Nav.Link href="#action1">Home</Nav.Link>
                          <Nav.Link href="#action2">Services</Nav.Link>
                          <Nav.Link href="#action2">Pages</Nav.Link>
                          <Nav.Link href="#action2">Case Studies</Nav.Link>
                          <Nav.Link href="#action2">Blog</Nav.Link>
                          <Nav.Link href="#action2">Contact</Nav.Link>
                          {/* <NavDropdown
                            title="Dropdown"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                          >
                            <NavDropdown.Item href="#action3">
                              Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              Something else here
                            </NavDropdown.Item>
                          </NavDropdown> */}
                        </Nav>
                        <div className="header__left d-flex align-items-center">
                          <Form className="me-3">
                            {values.map((v, idx) => (
                              <Button
                                className="search-box border-0 d-flex align-items-center justify-content-center"
                                key={idx} data-backdrop="false"
                                onClick={() => handleShow(v)}
                              >
                                <BiSearchAlt />
                              </Button>
                            ))}
                            <Modal
                              show={show}
                              fullscreen={fullscreen}
                              onHide={() => setShow(false)}

                              
                            >
                              <Container>
                                <Modal.Header
                                  closeButton
                                  className="border-0"
                                ></Modal.Header>
                                <Modal.Body>Modal body content</Modal.Body>
                              </Container>
                            </Modal>
                          </Form>
                          <a
                            href="tel:15143125678"
                            class="default-btn rounded-pill"
                          >
                            +1 (514) 312-5678
                          </a>
                        </div>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
