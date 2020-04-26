import React from 'react';

import { CardList } from './Components/Card-List/Card-List.component'
import { SearchBox } from './Components/Search-Box/Search-Box.component'

import './App.css';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      monsters: [],
      searchTerm: ''
    }
  }


  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json() )
        .then( users => this.setState( {monsters: users } ) )

  }

   handleChange = e => {
    this.setState( { searchTerm: e.target.value } )
  }

  render() {
    const { monsters, searchTerm } = this.state

    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    return (
      <div className = 'App'>
        <h1>Monsters Rolodex</h1>

        <SearchBox
          placeholder = 'Search Monsters'
          handleChange = { this.handleChange }
          />
        <CardList monsters = { filteredMonsters }/>

      </div>
    )
  }
}

export default App
