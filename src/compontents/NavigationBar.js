import {Container, Nav, Navbar} from "react-bootstrap";

const NavigationBar = () => {
    return ( 
        <>
        <Navbar expand="lg" className="navBar sticky-bottom">
            <Container className="nav">
                <Navbar.Brand className="title" href="#home">JV</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">
                        HOME
                    </Nav.Link>
                    <Nav.Link  href="#skills">
                        SKILLS
                    </Nav.Link>
                    <Nav.Link  href="#about">
                        ABOUT
                    </Nav.Link>
                    <Nav.Link  href="#services">
                        SERVICES
                    </Nav.Link>
                    <Nav.Link  href="#contact">
                        CONTACT ME
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
     );
}
 
export default NavigationBar;