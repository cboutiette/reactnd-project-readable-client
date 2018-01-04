import React, { Component } from 'react';
import './App.css';
import './TitleBanner';
import TitleBanner from './TitleBanner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBanner title="Test Title" />
      </div>
    );
  }
}

export default App;
