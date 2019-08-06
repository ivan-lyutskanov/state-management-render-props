import { Component } from "react";

export default class DataProvider extends Component {
  state = {
    count: 0
  };

  increment = val => {
    this.setState({
      count: this.state.count + val
    });
  };
  render() {
    return this.props.render({ ...this.state, increment: this.increment });
  }
}
