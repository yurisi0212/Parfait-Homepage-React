import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function Navigation() {
    return (
        <div className="App">
            <header className="App-header mb-5">
                <Navbar expand="lg">
                    <Container fluid>
                        <div style={{ 'font-size': '30px' }}>
                        <LinkContainer to="/">
                            <Navbar.Text className="text-light ms-3" >Parfait</Navbar.Text>
                        </LinkContainer>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Container>
                                <Nav className="w-100 nav-justified">
                                    <LinkContainer to="/">
                                        <Navbar.Text className="text-light nav-link">Home</Navbar.Text>
                                    </LinkContainer>
                                    <LinkContainer to="/about">
                                        <Navbar.Text className="text-light nav-link">About</Navbar.Text>
                                    </LinkContainer>
                                    <LinkContainer to="/member">
                                        <Navbar.Text className="text-light nav-link">Member</Navbar.Text>
                                    </LinkContainer>
                                    <LinkContainer to="/join">
                                        <Navbar.Text className="text-light nav-link">Join</Navbar.Text>
                                    </LinkContainer>
                                    <LinkContainer to="/contact">
                                        <Navbar.Text className="text-light nav-link">Contact</Navbar.Text>
                                    </LinkContainer>
                                </Nav>
                            </Container>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

export default Navigation;