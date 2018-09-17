import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getStations , getStreams } from '../../actions';

class App extends Component {

  componentDidMount(){
    this.props.getStations();
    this.props.getStreams();
  }

  render() {
    const { stations } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Currently monitoring
        </p>
        {stations.map(({ station }) => station)}
      </div>
    );
  }
}

function mapStateToProps({ stations }){
  return { stations }
}

export default connect(mapStateToProps, { getStations , getStreams })(App);
