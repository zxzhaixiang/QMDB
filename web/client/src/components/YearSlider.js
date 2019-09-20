import React, { Component } from 'react'
import ReactBootstrapSlider from 'react-bootstrap-slider'



class YearSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSliderValue: 1,
      step: 1,
      max: 5,
      min: 0,
    }
  }

  changeSliderValue = (event) => {
    this.setState({currentSliderValue: event.target.value})
    console.log(this.state.currentSliderValue)
  }

  render() {
    return (
      <div> 
        <ReactBootstrapSlider
        value={this.state.currentSliderValue}
        slideStop={this.changeSliderValue}
        step={this.state.step}
        max={this.state.max}
        min={this.state.min}
        />
     </div>
    )
  }
}

export default YearSlider