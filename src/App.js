import React, { Component } from "react";
import CardList from "./Components/CardList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((user) => this.setState({ monster: user }))
    );
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "hena" })}>Change</button>
        <button onClick={() => this.setState({ name: [1] })}>
          Change banck
        </button>
        {this.state.monster.map(({ id, ...othermonster }) => (
          <CardList key={id} {...othermonster} />
        ))}
      </div>
    );
  }
}
export default App;
