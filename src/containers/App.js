import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import RadarChart from "../components/radarChart";
import Page from "../components/Page";
import {Link} from 'react-router-dom';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      barChart: {
        data: [12, 5, 6, 6, 9, 10],
        width: 700,
        height: 500,
        id: 'id'
      },
      data: {
        variables: [],
        sets: []
      }
    }
  }

  render () {
    const {countryDataReducer} = this.props;
    const msg = countryDataReducer.countryData.message;
    if (msg && msg[(Object.keys(msg))[0]].toLowerCase() === 'standard' && !this.state.data.sets.some(set => set.key === 'standard')) {
      this.state.data.sets.push({
        key: 'standard',
        label: 'Standard',
        values: {},
      });
      Object.keys(msg).forEach((key, i) => {
        if (i !== 0) {
          this.state.data.variables.push({
            key,
            label: key
          });
          this.state.data.sets[0].values[key] = Number(msg[key]);
        }
      })
    } else if (msg && !this.state.data.sets.some(set => set.key === msg[(Object.keys(msg))[0]].toLowerCase())) {
      this.state.data.sets.push({
        key: msg[(Object.keys(msg))[0]].toLowerCase(),
        label: msg[(Object.keys(msg))[0]],
        values: {},
      });
      Object.keys(msg).forEach((key, i) => {
        if (i !== 0) {
          this.state.data.sets[1].values[key] = Number(msg[key]);
        }
      })
    }
    return (
      <Page>
        <RadarChart
          data={this.state.data}
          width={this.state.barChart.width}
          height={this.state.barChart.height}
        />
        <Link
          to={{
            pathname: '/',
            state: {prev: false},
          }}
          className="nav__link"
        >
          <button className="button banner_btn_1" type='submit'>
            Back
          </button>
        </Link>
        <Link
          to={{
            pathname: '/recommendation',
            state: {prev: false},
          }}
          className="nav__link"
        >
          <button className="button banner_btn_1" type='submit'>
            Next
          </button>
        </Link>
      </Page>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps (state) {
  const {countryDataReducer} = state;
  return {
    countryDataReducer,
  };
}

export default connect(mapStateToProps)(App);
