import React from 'react';
// import * as d3 from 'd3';
import Radar from 'react-d3-radar';

class RadarChart extends React.Component {

  constructor () {
    super();
    this.state = {
      username: ''
    };
    this.fetchCountry = this.fetchCountry.bind(this)
  }

  fetchCountry () {
    // const country = 'ghana';
    // const options = {
    //   method: 'GET',
    //   credentials: "same-origin", //include, same-origin
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // };
    // fetch(`${cor}${url}?country=${country}`, options)
    //   .then(response => {
    //     console.log(response);
    //     this.setState({username: response});
    //   })
  }

  // componentDidMount () {
  //   this.drawChart();
  // }
  //
  // drawChart(){
  //   const svg = d3
  //     .create('svg')
  //     .attr('viewBox', [0,0,this.props.width, this.props.height]);
  //
  //   svg
  //     .append('g')
  //     .selectAll('g')
  //     .data()
  //
  // }

  render () {
    let data = {
      variables: this.props.variables,
      sets: this.props.sets,
    };
    console.log(data);
    return (
      <div>
        <Radar
          width={700}
          height={350}
          padding={70}
          domainMax={400}
          highlighted={null}
          onHover={(point) => {
            if (point) {
              console.log('hovered over a data point');
            } else {
              console.log('not over anything');
            }
          }}
          data={data}
        />
      </div>
    )
  }
}

export default RadarChart
