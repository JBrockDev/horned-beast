import { Component } from "react";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends Component {
  render() {
    return (
      <Modal
        size="lg"
        show={this.props.show}
        onHide={() => this.props.displayModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {this.props.beast.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.beast.image_url}></img>
          <p>{this.props.beast.description}</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;
