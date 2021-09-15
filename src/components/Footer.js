import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Footer extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Author: {this.props.author}</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
