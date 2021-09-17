import { Component } from "react";
import Form from "react-bootstrap/Form";

class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    this.props.handleChange(id, value);
  };

  render() {
    return (
      <Form.Group controlId="inputTerms">
        <Form.Label>Beast Name</Form.Label>
        <Form.Control
          onChange={this.handleChange}
          type="text"
          placeholder="Narwhal"
          value={this.props.inputValue}
        />
        <Form.Text className="text-muted">Search for a beast name</Form.Text>
      </Form.Group>
    );
  }
}

export default SearchInput;
