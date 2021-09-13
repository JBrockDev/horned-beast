import { Component } from "react";
import HornedBeasts from "./HornedBeasts";




class Main extends Component {
  render() {
    getBeasts(this.props.items);
    return <>{getBeasts(this.props.items)}</>;
  }
}

function getBeasts(items) {
  console.log(items);
  let beastList = [];
  items.forEach(x => {
    beastList.push(<HornedBeasts item={x} />);
  });
  return beastList;
};

export default Main;
