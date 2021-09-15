import { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';


class Main extends Component {
  render() {
    getBeasts(this.props.items);
    return <>{getBeasts(this.props.items)}</>;
  }
}

function getBeasts(items) {
  let beastList = [];
  items.forEach((beast, index) => {
    beastList.push(<HornedBeasts key={"Beast-" + index} item={beast} />);
  });
  return (
    <Row xs={1} md={2} lg={3}>
      {beastList}
    </Row>
  );
};

export default Main;
