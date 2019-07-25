import React, {Component} from 'react';

class SearchBox extends Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  render () {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        if (this.state.value !== '') {
          this.props.onSubmit(this.state.value);
        }
      }}>
        <input
          type='text'
          value={this.state.value}
          placeholder='Enter Country Name'
          className='input'
          onChange={this.handleChange}
        />
        <button className="button banner_btn_1" type='submit'>
          Run
        </button>
      </form>
    )
  }
}

export default SearchBox
