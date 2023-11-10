import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
 
  const imageStyle = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  };

  return (
    <>
   
      <Navbar bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="home">
          {/* For items in the public folder / can be used directly! */}
            <Image src="/red-clipboard.png" roundedCircle style={imageStyle}/>
            {props.title}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

// Default Props
NavBar.defaultProps = {
  title: "Your Title Here"
};

// NavBar.propTypes = {
//     title: propTypes.string
// };

export default NavBar;