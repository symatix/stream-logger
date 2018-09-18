import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropdownButton from '../Button/DropdownButton';
import Table from '../Table/Table';
import { getStations, getStreams } from '../../actions';

class ListDisplay extends Component {
   constructor(props) {
      super(props);
      this.state = { station: '' };

      this.changeStation = this.changeStation.bind(this);
   }

   componentDidMount() {
      this.props.getStations();
      this.props.getStreams();
   }

   filterData(station) {
      if (!station) {
         return false
      }
      const stationData = this.props.streams.filter(s => s.station === station);
      
      // this shoud remove all entries with same song name
      // but sometimes streams lock on to same song name, making this redundant
      //**************************************************************** */
      // const uniqueStationData = stationData.filter((item, i) => {
      //    const first = item.current_song;
      //    let second;
      //    if (i + 1 < stationData.length) {
      //       second = stationData[i + 1].current_song;
      //       if (first !== second || first === "[no data]") {
      //          return true
      //       }
      //    }
      // })
      //***************************************************************** */
      return stationData;
   }

   changeStation(station) {
      this.setState({ station })
   }

   render() {
      const { stations } = this.props;
      return (
         <div className="App">
            <DropdownButton
               label="Select Station"
               action={this.changeStation}
               options={stations.map(({ station }) => station)} />
            {this.state.station
               ? <Table station={this.state.station} data={this.filterData(this.state.station)} />
               : null}
         </div>
      );
   }
}

function mapStateToProps({ stations, streams }) {
   return { stations, streams }
}

export default connect(mapStateToProps, { getStations, getStreams })(ListDisplay);
