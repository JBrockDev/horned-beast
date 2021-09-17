import { Component } from "react";
import Form from "react-bootstrap/Form";

class SearchSelect extends Component {
  constructor(props) {
    super(props);
  }

  getUniqueHorns = () => {
    let existingHorns = {};
    let uniqueHornCountsArray = this.props.beasts.filter((beast) => {
      if (existingHorns[beast.horns]) {
        return false;
      }
      existingHorns[beast.horns] = true;
      return true;
    });
    return uniqueHornCountsArray;
  };

  handleChange = (event) => {
    let selectHorns = event.target.value;
    let id = event.target.id;
    this.props.handleChange(id, selectHorns);
  };

  render() {
    return (
      <Form.Group controlId="selectHorns">
        <Form.Select
          value={this.props.selectValue}
          aria-label="Default select example"
          onChange={this.handleChange}
        >
          <option key="any" value="any">
            Any
          </option>
          {this.getUniqueHorns().map((beast) => {
            return (
              <option key={"horns-" + beast.horns} value={beast.horns}>
                {beast.horns}
              </option>
            );
          })}
        </Form.Select>
        <Form.Text className="text-muted">Select by number of horns.</Form.Text>
      </Form.Group>
    );
  }
}

export default SearchSelect;
