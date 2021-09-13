import { Component } from 'react';

class HornedBeasts extends Component {
  render() {
    console.log(this.props);
    return <div>
      <img title={this.props.item.title} src={this.props.item.image_url} alt={this.props.item.keyword}></img>
      <h2>{this.props.item.title}</h2>
      <p>Number of horns: {this.props.item.horns}</p>
      <p>{this.props.item.description}</p>
    </div>;
  }
}

export default HornedBeasts;
