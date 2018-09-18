import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListDisplay from '../ListDisplay/ListDisplay';
import { getStations, getStreams } from '../../actions';

class App extends Component {
   componentDidMount() {
      this.props.getStations();
      this.props.getStreams();
   }

   render() {
      return (
         <div className="App">
            <ListDisplay />
         </div>
      );
   }
}

export default connect(null, { getStations, getStreams })(App);
