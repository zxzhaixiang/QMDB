import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Test from './components/Test'
import Search from './components/Search'
import YearSlider from './components/YearSlider'
import Filters from './components/Filters'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css"

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
        <br></br>
        <Filters/>
        <br></br>
        <YearSlider/>
        <div>
          <Button outline color="primary" onClick={this.callAPI}>Update date</Button>
        <div>
      <Search
        suggestions={[
          "Matrix",
          "Horrible"
        ]}
      />
    </div>
        </div>
        <p className="App-intro">{this.state.date}</p>
      </div>
    )
  }
}

export default App;
