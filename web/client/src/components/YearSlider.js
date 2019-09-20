import React, { Component } from 'react'
import ReactBootstrapSlider from 'react-bootstrap-slider'



class YearSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: 1,
      step: 1,
      max: 5,
      min: 0,
    }
  }

  changeValue = (event) => {
    this.setState({currentValue: event.target.value})
    console.log(this.state.currentValue)
  }

  render() {
    return (
      <div> 
        <ReactBootstrapSlider
        value={this.state.currentValue}
        slideStop={this.changeValue}
        step={this.state.step}
        max={this.state.max}
        min={this.state.min}
        />
     </div>
    )
  }
}

export default YearSlider