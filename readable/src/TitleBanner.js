import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBanner extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <title>{this.props.title}</title>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default TitleBanner;
