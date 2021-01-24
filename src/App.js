import React from 'react';
import './App.css';
const options = [
  {
    label: "Cricket",
    value: "cricket",
  },
  {
    label: "Football",
    value: "football",
  },
  {
    label: "Hockey",
    value: "hockey",
  },
  {
    label: "Table Tennis",
    value: "tabletennis",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: "football",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ team: e.target.value });
  }

  render() {
    return (
      <div id="App">
        <div className="drop-down">
          <select value={this.state.team} onChange={this.handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
  
    );
  }
}

export default App;