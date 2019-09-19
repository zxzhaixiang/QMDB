import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { date: "" };
  }


  callAPI = () => {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ date: res }))
          .catch(err => err);
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title"> Welcome to React</h1>
        </header>
        <div>
          <Button outline color="primary" onClick={this.callAPI}>Update date</Button>
        </div>
        <p className="App-intro">{this.state.date}</p>
      </div>
    )
  }
}

export default App;
