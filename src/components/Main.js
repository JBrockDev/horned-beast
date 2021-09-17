import { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import Row from "react-bootstrap/Row";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  };

  render() {
    return (
      <>
        <Row xs={1} md={2} lg={3}>
          {this.props.items.map((beast, index) => (
            <HornedBeasts
              handleClick={() => this.props.handleClick(beast)}
              key={"Beast-" + index}
              item={beast}
            />
          ))}
        </Row>
      </>
    );
  }
}

export default Main;
