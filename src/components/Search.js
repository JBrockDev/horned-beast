import { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import SearchInput from "./SearchInput";
import SearchSelect from "./SearchSelect";
import Nav from "react-bootstrap/Nav";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: "",
      searchSelectValue: "any",
    };
  }

  handleChange = (id, value) => {
    let changedState = {};

    if (id === "selectHorns") {
      changedState.searchSelectValue = value;
    } else if (id === "inputTerms") {
      changedState.searchInputValue = value;
    }

    this.setState(
      changedState, // I ran into issues where code following setState would execute prior to state actually updating. This calls the function after state has successfully updated
      () => {
        let filteredBeasts = [];
        // filter beasts by both input box and select field
        filteredBeasts = this.props.filteredBeasts.filter((beast) => {
          console.log(beast);
          console.log(beast.title.includes(this.state.searchInputValue));
          let hasReqHorns;
          if (this.state.searchSelectValue === "any") {
            hasReqHorns = true;
          } else if (beast.horns === parseInt(this.state.searchSelectValue)) {
            hasReqHorns = true;
          }
          return (
            (beast.title.includes(this.state.searchInputValue) ||
              beast.keyword.includes(this.state.searchInputValue)) &&
            hasReqHorns
          );
        });
        // check to see if array is empty, if so, refill array and reset form values
        if (filteredBeasts.length === 0) {
          filteredBeasts = this.props.beasts;
          this.setState({
            searchInputValue: "",
            searchSelectValue: "any",
          });
        }
        this.props.searchHandler(filteredBeasts);
      }
    );
  };

  render() {
    return (
      <>
        <Form>
          <Nav>
            <SearchSelect
              beasts={this.props.beasts}
              handleChange={this.handleChange}
              selectValue={this.state.searchSelectValue} // resetting values took a bit to figure out with this way, everything was using hooks in a functional component
            />
          </Nav>
          <Nav>
            <SearchInput
              handleChange={this.handleChange}
              inputValue={this.state.searchInputValue}
            />
          </Nav>
        </Form>
      </>
    );
  }
}

export default Search;
