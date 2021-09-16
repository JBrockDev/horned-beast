import { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import Row from "react-bootstrap/Row";
import BeastModal from './BeastModal';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: this.props.items[0]
    };
  };

  displayModal = (isShowing) => {
    this.setState({
      showModal: isShowing,
    });
  }

  handleClick = (beast) => {
    this.setState({
      beast: beast
    });
    this.displayModal(true);
  }

  render() {
    return (
      <>
        <Row xs={1} md={2} lg={3}>
          {this.props.items.map((beast, index) => (
            <HornedBeasts handleClick={() => this.handleClick(beast)} key={"Beast-" + index} item={beast} />
          ))}
        </Row>
        <BeastModal displayModal={this.displayModal} show={this.state.showModal} beast={this.state.beast} /> 
      </>
    );
  }
}

export default Main;
