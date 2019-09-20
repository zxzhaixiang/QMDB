import React, { Component } from 'react'

class Filters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedBoxes: [],
      genres: ['dumb', 'cool', 'boring', 'awful'],
      countries: ['murica', 'china', 'straya', 'kiwiland'],
      languages: ['howdytalk', 'mandorin', 'apple', 'spanish'],
      genreSel: [],
      countrySel: [],
      languageSel: [],
    }
  }
  
  static defaultProps = {
    checked: false
  }

  state = {
    checked: this.props.checked
  }

  handleChange = () => {
    this.setState({checked: !this.state.checked})
  }

  handleSubmit = (event) => {
    console.log(event.target.value)
    this.setState({genre: event.target.value})
    this.setState({country: event.target.value})
    this.setState({language: event.target.value})
  }

  genreChangeHandler = (event) => {
    console.log('Value', event.target.value)
    console.log('Checked', event.target.checked)
    console.log('Name', event.target.name)
    let { genreSel } = this.state
    if (event.target.checked) {
      genreSel = [...genreSel, event.target.value]
    } else {
      genreSel = genreSel.filter(el => el !== event.target.value)
    }
    this.setState({genreSel})
    console.log('Selected Genres:', genreSel)
  }

  countryChangeHandler = (event) => {
    console.log('Value', event.target.value)
    console.log('Checked', event.target.checked)
    console.log('Name', event.target.name)
    let { countrySel } = this.state
    if (event.target.checked) {
      countrySel = [...countrySel, event.target.value]
    } else {
      countrySel = countrySel.filter(el => el !== event.target.value)
    }
    this.setState({countrySel})
    console.log('Selected Countries:', countrySel)
  }

  languageChangeHandler = (event) => {
    console.log('Value', event.target.value)
    console.log('Checked', event.target.checked)
    console.log('Name', event.target.name)
    let { languageSel } = this.state
    if (event.target.checked) {
      languageSel = [...languageSel, event.target.value]
    } else {
      languageSel = languageSel.filter(el => el !== event.target.value)
    }
    this.setState({languageSel})
    console.log('Selected Genres:', languageSel)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Genre: 
          <br></br>
          <input 
            type="checkbox" 
            name="genre1"  
            onChange = {this.genreChangeHandler.bind(this)}
            value={this.state.genres[0]}/> Genre 
          <br></br>
          <input 
            type="checkbox" 
            name="genre2" 
            onChange = {this.genreChangeHandler.bind(this)}
            value={this.state.genres[1]}/> Genre 
          <br></br>
          <input 
            type="checkbox" 
            name="genre3" 
            onChange = {this.genreChangeHandler.bind(this)}
            value={this.state.genres[2]}/> Genre 
          <br></br>
          <input 
            type="checkbox" 
            name="genre4" 
            onChange = {this.genreChangeHandler.bind(this)}
            value={this.state.genres[3]}/> Genre 
        </label>
        <t></t>
        <label>
          Country:
          <br></br>
          <input 
            type="checkbox" 
            name="country1"  
            onChange = {this.countryChangeHandler.bind(this)}
            value={this.state.countries[0]}/> Country
          <br></br>
          <input 
            type="checkbox" 
            name="country2"  
            onChange = {this.countryChangeHandler.bind(this)}
            value={this.state.countries[1]}/> Country          
            <br></br>
          <input 
            type="checkbox" 
            name="country3"  
            onChange = {this.countryChangeHandler.bind(this)}
            value={this.state.countries[2]}/> Country           
            <br></br>
          <input 
            type="checkbox" 
            name="country4"  
            onChange = {this.countryChangeHandler.bind(this)}
            value={this.state.countries[3]}/> Country         
          </label>
        <t></t>
        <label>
          Language:
          <br></br>
          <input 
            type="checkbox" 
            name="language1"  
            onChange = {this.languageChangeHandler.bind(this)}
            value={this.state.languages[0]}/> Language
          <br></br>
          <input 
            type="checkbox" 
            name="language2"  
            onChange = {this.languageChangeHandler.bind(this)}
            value={this.state.languages[1]}/> Language
          <br></br>
          <input 
            type="checkbox" 
            name="language3"  
            onChange = {this.languageChangeHandler.bind(this)}
            value={this.state.languages[2]}/> Language
          <br></br>
          <input 
            type="checkbox" 
            name="language4"  
            onChange = {this.languageChangeHandler.bind(this)}
            value={this.state.languages[3]}/> Language
          <br></br>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }














}

export default Filters