import React, { Component } from 'react';

import TabContainer from './TabContainer';
import DropdownContainer from './DropdownContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div
      //   style={{
      //     display: 'flex',
      //     position: 'relative'
      //   }}
      //   id="app"
      // >
      //   <TabContainer />
      //   <DropdownContainer />
      // </div>
      <div style={{ margin: '50px', display: 'flex' }}>
        <button>Popover on Right</button>
        <div>Building a popover on right in React</div>
      </div>
    );
  }
}

export default App;
