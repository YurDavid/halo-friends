import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchPokemon:'',
    };
    //this.handleChange = this.handleChange.bind(this)

  }

  async componentDidMount() {
    try {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await resp.json();
      this.setState({ pokemons: data.results });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
/*
  handleChange(e){
    this.setState({searchPokemon: e.target.value})
  }*/

  handleChange = (e) => {
    this.setState({searchPokemon: e.target.value})

  }

  render() {
    const { pokemons, searchPokemon } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => (pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())));

    return (
      <div className="App">
        <h1>Pokémon List</h1>
        <SearchBox placeholder="search pokemon"  handleChange={this.handleChange} />
        {pokemons.length === 0 ? (
          <p>Loading...</p>
        ) : (
        <PokemonList pokemons={filteredPokemons} />
        )}
      </div>
    );
  }
}

export default App;
