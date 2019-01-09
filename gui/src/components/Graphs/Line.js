import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';

var initState = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'dataset',
      fill: true,
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
   constructor(props){
      super(props);

      this.constructData = this.constructData.bind(this)
   }

   componentWillMount(){
      this.setState(initState) 
   }

   componentDidMount(){
      var _this = this;
      var newData = this.constructData();
      console.log(newData)
   }

  stepFilter(arr, i, step) {
    var length = arr.length;
    var first = arr[0]
    console.log(arr)
    while (step < length - 1) {
      arr.splice(i, step);
      console.log(arr)
      i++;
      length = arr.length
    }
    arr.unshift(first)
    return arr
  }

   constructData(){
      console.log("klikam")
      var labels = [];
      var data = [];

      const arr = this.stepFilter(
        this.props.streams.filter(a => a.station === 'Yammat FM'),
        0,
        19
      )
      console.log(arr)

      // arr.map(a => {
      //         labels.push(a.time)
      //         data.push(a.current_listeners)
      //      })

      // console.log(this.props)
      // this.props.streams
      //    .filter(a => a.station === 'Yammat FM')
      //    .filter((value, index, Arr) => index % 20 == 0)
      //    .map(a => {
      //       labels.push(a.time)
      //       data.push(a.current_listeners)
      //    })

      // var newState = { ...this.state }
      // newState.labels = labels;
      // newState.datasets[0].data = data;
      // newState.datasets[0].label = "Listeners";
      // console.log(newState)
      // this.setState(newState);
   }


  render() {
    return (
      <div>
         <button onClick={this.constructData}>showGraph</button>
        <h2>Line Example</h2>
        <Line data={this.state} />
      </div>
    );
  }
};

function mapStateToProps({streams}){
   return { streams }
}

export default connect(mapStateToProps)(LineGraph);