import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import beasts from "./data/data.json";
import { Component } from "react";
import SelectedBeast from "./components/SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: beasts[0],
      beasts: beasts,
    };
  }

  displayModal = (isShowing) => {
    this.setState({
      showModal: isShowing,
    });
  };

  handleClick = (beast) => {
    this.setState({
      beast: beast,
    });
    this.displayModal(true);
  };

  searchBeasts = (filteredBeasts) => {
    this.setState({
      beasts: filteredBeasts,
    });
  };

  render() {
    return (
      <>
        <Header
          title="Horned Beasts"
          beasts={beasts}
          searchHandler={this.searchBeasts}
        />
        <SelectedBeast
          displayModal={this.displayModal}
          show={this.state.showModal}
          beast={this.state.beast}
        />
        <Main
          items={this.state.beasts}
          displayModal={this.displayModal}
          handleClick={this.handleClick}
        />
        <Footer author="Jonathan Brock" />
      </>
    );
  }
}

export default App;
