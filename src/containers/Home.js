import React, {Component} from 'react';
import logo from '../images/logo.png';
import banner from '../images/banner_img.png';
import SearchBox from "../components/SearchBox";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchCountryData} from '../actions/actions';
import '../styles/App.css';
import Page from "../components/Page";

class Home extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props.dispatch(fetchCountryData('standard'));
  }

  handleSubmit (countryName) {
    const {dispatch} = this.props;
    dispatch(fetchCountryData(countryName));
    this.props.history.push({pathname:'/about',state: { prev: true }})
  }

  render () {
    const {countryDataReducer} = this.props;
    return (
      <Page>
        <div>
          <section className="banner">
            <div className="container">
              <div className="navbar-brand">
                <img src={logo} height='100' className="App-logo" alt="logo"/>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="banner_text">
                    <div className="banner_text_iner">
                      <h1 className="banner_text_search"> Who are you feeding today? </h1>
                      <SearchBox onSubmit={this.handleSubmit}/>
                        {countryDataReducer.isFetching && <h2>Loading...</h2>}
                    </div>
                  </div>
                </div>
                <div className="banner_img d-none d-lg-block">
                  <div className="something1">
                    <img src={banner} height='350' className="logo" alt="logo"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Page>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps (state) {
  const {countryDataReducer} = state;
  return {
    countryDataReducer,
  };
}

export default connect(mapStateToProps)(Home);
