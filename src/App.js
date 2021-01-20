import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CircleSelector/CircleSelector'

const circleNo = ["0", "1", "2", "3"]

class App extends Component {
  state = {
    selectedCircleIdx: 0
  }

  handleCircleSelection = (newIdx) => {
    this.setState ({
      selectedCircleIdx: newIdx
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 3 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handleCircleSelection={this.handleCircleSelection}
            circleNo={circleNo}
            selectedCircleIdx={this.state.selectedCircleIdx}
          />
          <Circles
            handleCircleSelection={this.handleCircleSelection}
            circleNo={circleNo}
            selectedCircleIdx={this.state.selectedCircleIdx}
          />
        </main>
      </div>
    );
  }
}

export default App;
