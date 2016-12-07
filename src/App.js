import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleClick() {
    console.log(this)
    this.context.router.push({
      pathname: '/test/',
      state: {}
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello</h2>
        </div>
        <div style={{"width": "100px", "height": "100px", "backgroundColor": "blue"}} onClick={this.handleClick.bind(this)}>
      </div>
      </div>
    );
  }
}

App.contextTypes =  {
    router: React.PropTypes.object.isRequired
  };

export default App;
