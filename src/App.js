import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      monsters: []
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    if (this.state.string === 'Hello World :)') {
      this.setState({
        string: 'Goodbye World :('
      });
    } else {
      this.setState({
        string: 'Hello World :)'
      });
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
