import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input type='search' placeholder='Search monsters' onChange={ this.onSearchChange }/>
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
