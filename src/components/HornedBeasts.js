import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  handleImageClick = (event) => {
    // this.setState({
    //   votes: this.state.votes + 1,
    // });
    this.props.handleClick();
  };

  handleHeartClick = (event) => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };

  render() {
    return (
      <>
        <Col>
          <Card>
            <Card.Img
              src={this.props.item.image_url}
              onClick={this.handleImageClick}
            />
            <Card.Footer>
              <span onClick={this.handleHeartClick}>💚</span> {this.state.votes}
            </Card.Footer>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeasts;
