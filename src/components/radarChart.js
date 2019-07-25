import React from 'react';
import * as d3 from 'd3';
import Radar from 'react-d3-radar';

const cor = '';
const url = 'https://u26y0c7lh4.execute-api.us-east-2.amazonaws.com/dev/nutrition/';

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
      variables: [
        {key: 'calcium', label: 'Calcium'},
        {key: 'fruit', label: 'Fruit'},
        {key: 'legumes', label: 'Legumes'},
        {key: 'milk', label: 'Milk'},
        {key: 'nuts_and_seed', label: 'Nuts and seed'},
        {key: 'omega_3', label: 'Omega 3'},
        {key: 'processed_meat', label: 'Processed meat'},
        {key: 'red_meat', label: 'Red meat'},
        {key: 'salt', label: 'Salt'},
        {key: 'sugar_sweetened_beverages', label: 'Sugar Sweetened Beverages'},
        {key: 'vegetables', label: 'Vegetables'},
        {key: 'whole_grain', label: 'Whole grain'},
      ],
      sets: [
        {
          key: 'me',
          label: 'My Scores',
          values: {
            calcium: 4,
            fruit: 6,
            legumes: 7,
            milk: 2,
            nuts_and_seed: 8,
            omega_3: 1,
            processed_meat: 1,
            red_meat: 1,
            salt: 1,
            sugar_sweetened_beverages: 1,
            vegetables: 1,
            whole_grain: 1,
          },
        },
        {
          key: 'everyone',
          label: 'Everyone',
          values: {
            calcium: 10,
            fruit: 8,
            legumes: 6,
            milk: 4,
            nuts_and_seed: 2,
            omega_3: 4,
            processed_meat: 10,
            red_meat: 4,
            salt: 4,
            sugar_sweetened_beverages: 4,
            vegetables: 8,
            whole_grain: 10,
          },
        },
      ],
    };
    if (!!this.props.data.sets.length)
      data = this.props.data;
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
