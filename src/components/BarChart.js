import React from 'react';
import * as d3 from 'd3'

class BarChart extends React.Component {
  // lifecycle componentDidMount
  // display only when the component has been mounted in the DOM
  componentDidMount () {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;

    // svg is scalable, never appear pixelated
    const svg = d3.select("div").append("svg").attr("width", this.props.width).attr("height", this.props.height);
    // append returns a handle
    // attr for any html element
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => this.props.height - 10 * d)
      .attr("width", 25)
      .attr('height', (d,i) => d * 10)
      .attr("fill", "green");

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => d)
      .attr("x", (d,i) => i*70 + 3)
      .attr("y", (d,i) => this.props.height - (10*d) - 3)
  }

  render() {
    return (
      <div id={'#' + this.props.id}></div>
    )
  }
}

export default BarChart;
