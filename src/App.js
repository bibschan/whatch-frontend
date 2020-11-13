import React from 'react';
import './scss/App.css';
import CardList from './components/CardList.js';
import Login from './components/Login';


class App extends React.Component {

  state = {
    authenticated: false,
    movieArray: [],
  }

  addMovieToArray = (id) => {
    // console.log(id);
    this.setState({
      movieArray: [...this.state.movieArray, id]
    })
  }

  render() {
    console.log(this.state.movieArray);
    return (
      <div className="app">
        <Login />
        <CardList addMovieToArray={this.addMovieToArray}/>
        {/* < this.state.authenticated && CardList /> */}
        </div>
      );
  }

}

export default App;
