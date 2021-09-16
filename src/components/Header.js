import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Search from "./Search";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Horned Beast Voting</Navbar.Brand>
          <Nav>
            <Search
              searchHandler={this.props.searchHandler}
              beasts={this.props.beasts}
            />
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
