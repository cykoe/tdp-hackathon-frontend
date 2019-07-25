import React from 'react';
import BarChart from "../components/BarChart";
import RadarChart from "../components/radarChart";

class App extends React.Component {
  state = {
    barChart: {
      data: [12, 5, 6, 6, 9, 10],
      width: 700,
      height: 500,
      id: 'id'
    },
    StackBarChart: {
      data: [12, 5, 6, 6, 9, 10],
      width: 600,
      height: 600,
      id: 'id'
    }
  };

  render () {
    return (
      <div className="App">
        <BarChart
          data={this.state.barChart.data}
          width={this.state.barChart.width}
          height={this.state.barChart.height}
        />
        <RadarChart
          data={this.state.barChart.data}
          width={this.state.barChart.width}
          height={this.state.barChart.height}
        />
      </div>
    )
  }
}

export default App
