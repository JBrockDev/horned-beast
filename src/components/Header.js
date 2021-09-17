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
          <Search
            searchHandler={this.props.searchHandler}
            beasts={this.props.beasts}
            filteredBeasts={this.props.filteredBeasts}
          />
        </Container>
      </Navbar>
    );
  }
}

export default Header;
