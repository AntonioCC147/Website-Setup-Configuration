import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './header.css';

export default function NavbarHeader() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header-text">
            <Container>
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/despremine">Despre mine</Nav.Link>

                    <NavDropdown title="Algoritmi" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/clasaix">Clasa a IX-a</NavDropdown.Item>
                        <NavDropdown.Item href="/clasax">Clasa a X-a</NavDropdown.Item>
                        <NavDropdown.Item href="/clasaxi">Clasa a XI-a</NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item href="/atestat">Atestat</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/meditatii">Meditații</Nav.Link>

                    <Nav.Link href="/portofoliu">Portofoliu</Nav.Link>

                    <Nav.Link href="/compileaza">Compilează</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/contact">Contactează-mă</Nav.Link>
                    <Nav.Link eventKey={2} href="/admin">Admin</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}