import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class LineGraph extends Component {

   constructData(){
      var arr = this.props.streams.filter(a => a.station === 'Yammat FM')
         .filter(function(value, index, Arr) {
            return index % 20 == 0;
         });

      var labels = [];
      var data = [];
      
      arr.map(a => {
         labels.push(a.time)
         data.push(a.current_listeners)
      })
      console.log(labels)
      console.log(data)

   }


  render() {
     this.constructData()
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
    );
  }
};

function mapStateToProps({streams}){
   return { streams }
}

export default connect(mapStateToProps)(LineGraph);