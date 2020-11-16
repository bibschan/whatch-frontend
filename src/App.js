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

  authenticateUser = () => {
    this.setState({
      authenticated: true,
    })
  }

  render() {
    return (
      <div className="app">
        {!this.state.authenticated && <Login authenticateUser={this.authenticateUser} />}
        {/* LOADING SCREEN???? */}
        {this.state.authenticated && <CardList addMovieToArray={this.addMovieToArray} />}
        </div>
      );
  }

}

export default App;
