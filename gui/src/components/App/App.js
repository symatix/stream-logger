import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListDisplay from '../ListDisplay/ListDisplay';
import { getStations, getStreams } from '../../actions';
import CrazyGraph from '../Graphs/CrazyGraph';
import LineGraph from '../Graphs/Line';

class App extends Component {
   componentDidMount() {
      this.props.getStations();
      this.props.getStreams();
   }

   render() {
      return (
         <div className="App">
         <div style={{width:'50%'}}>
            <LineGraph />
         </div>
            <ListDisplay />
         </div>
      );
   }
}

export default connect(null, { getStations, getStreams })(App);
