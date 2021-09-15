import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
  };

  handleClick = (event) => {
    this.setState({
      votes: this.state.votes + 1
    });
  };

  render() {
    return (
      <>
        <Col>
          <Card>
            <Card.Img src={this.props.item.image_url} onClick={this.handleClick} />
            <Card.Body>
              <Card.Title>{this.props.item.title}</Card.Title>
              <Card.Text>
                {this.props.item.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>💚 {this.state.votes}</Card.Footer>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeasts;
