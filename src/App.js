import React from 'react';

import { CardList } from './Components/Card-List/Card-List.component'

import './App.css';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      monsters: []
    }
  }


  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))

  }

  render() {
    return (
      <div className = 'App'>
      <h1>Monsters Rolodex</h1>

      <CardList monsters = {this.state.monsters}/>

      </div>
    )
  }
}

export default App
