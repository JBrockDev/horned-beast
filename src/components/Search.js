import { Component } from "react";
import Form from "react-bootstrap/Form";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  handleKeyPress = (event) => {
    let searchTerm = event.target.value;
    let filteredBeasts = this.props.beasts.filter((beast) => {
      return (
        beast.title.includes(searchTerm) || beast.keyword.includes(searchTerm)
      );
    });
    if (filteredBeasts.length === 0) {
      filteredBeasts = this.props.beasts;
      event.target.value = "";
      alert("No results for that term");
    }
    this.props.searchHandler(filteredBeasts);
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Beast Name</Form.Label>
            <Form.Control
              onChange={this.handleKeyPress}
              type="text"
              placeholder="Narwhal"
            />
            <Form.Text className="text-muted">
              Search for a beast name
            </Form.Text>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default Search;
