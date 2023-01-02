import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../Images/lightbulb.png";

function BasicExample() {
  return (
    <header className="header-section">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" className='d-flex button'>
                <img src={Logo}
                  className="img-fluid"
                  width="80px"
                  alt="imageLogo"
                />
                <span>
                  <h4 className="mt-4">LightUp</h4>
                </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#skill-set">Skills</Nav.Link>
            <Nav.Link href="https://github.com/LightUpdev?tab=repositories">Project</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1sSGO1-96smWC9Wot7-uR1UhaxK15NpPt/view?usp=drivesdk">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default BasicExample;