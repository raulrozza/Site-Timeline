import React from 'react';

// Image
import logo from '../../assets/img/logo_nav.png';

// Scroll
import { Link } from 'react-scroll';

// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

// Icons
import { FaBars } from 'react-icons/fa';

// CSS
import './styles.css';

const NavBar = () => {
    return (
        <Navbar fixed="top" className="top-navbar" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <picture>
                        <img
                            src={logo}
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </picture>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <FaBars />
                </Navbar.Toggle>

                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Sobre Nós
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Serviços
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projetos
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="team"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Equipe
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contato
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
