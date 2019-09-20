import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container
} from "reactstrap";
import ReactBootstrapSlider from 'react-bootstrap-slider'

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedBoxes: [],
      genres: ["dumb", "cool", "boring", "awful"],
      countries: ["murica", "china", "straya", "newZealand"],
      languages: ["howdytalk", "mandorin", "apple", "spanish"],
      genreSel: [],
      countrySel: [],
      languageSel: [],
      currentSliderValue: 1,
      step: 1,
      max: 5,
      min: 0,
    };
  }

  static defaultProps = {
    checked: false
  };

  state = {
    checked: this.props.checked
  };

  changeSliderValue = (event) => {
    this.setState({currentSliderValue: event.target.value})
    console.log(this.state.currentSliderValue)
  }

  genreChangeHandler = event => {
    console.log("Value", event.target.value);
    console.log("Checked", event.target.checked);
    console.log("Name", event.target.name);
    let { genreSel } = this.state;
    if (event.target.checked) {
      genreSel = [...genreSel, event.target.value];
    } else {
      genreSel = genreSel.filter(el => el !== event.target.value);
    }
    this.setState({ genreSel });
    console.log("Selected Genres:", genreSel);
  };

  countryChangeHandler = event => {
    console.log("Value", event.target.value);
    console.log("Checked", event.target.checked);
    console.log("Name", event.target.name);
    let { countrySel } = this.state;
    if (event.target.checked) {
      countrySel = [...countrySel, event.target.value];
    } else {
      countrySel = countrySel.filter(el => el !== event.target.value);
    }
    this.setState({ countrySel });
    console.log("Selected Countries:", countrySel);
  };
  languageChangeHandler = event => {
    console.log("Value", event.target.value);
    console.log("Checked", event.target.checked);
    console.log("Name", event.target.name);
    let { languageSel } = this.state;
    if (event.target.checked) {
      languageSel = [...languageSel, event.target.value];
    } else {
      languageSel = languageSel.filter(el => el !== event.target.value);
    }
    this.setState({ languageSel });
    console.log("Selected Genres:", languageSel);
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Row>
            <Col sm="auto" className="align-self-center">
              <Label for="emaillabel">Email:</Label>
            </Col>
            <Col>
              <Input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="placeholder@gmail.com"
              />
            </Col>
          </Row>

          <Row>
            <Col sm="auto" className="align-self-center">
              <Label for="searchbox">Keywords:</Label>
            </Col>
            <Col>
              <Input
                type="text"
                className="form-control"
                name="search"
                id="search"
                placeholder="Search keywords"
              />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup check>
          <Row>
            <Col className="align-self-center">
              <Label check for="genres">Genres:</Label>
              <br></br>
              <Input
                type="checkbox"
                name="genre1"
                onChange={this.genreChangeHandler.bind(this)}
                value={this.state.genres[0]}
              />{' '} Genre 1
              <br></br>
              <Input
                type="checkbox"
                name="genre2"
                onChange={this.genreChangeHandler.bind(this)}
                value={this.state.genres[1]}
              />{' '} Genre 2
              <br></br>
              <Input
                type="checkbox"
                name="genre3"
                onChange={this.genreChangeHandler.bind(this)}
                value={this.state.genres[2]}
              />{' '} Genre 3
              <br></br>
              <Input
                type="checkbox"
                name="genre4"
                onChange={this.genreChangeHandler.bind(this)}
                value={this.state.genres[3]}
              />{' '} Genre 4
              <br></br>
            </Col>

            <Col className="align-self-center">
              <Label for="countries">Countries:</Label>
              <br></br>
              <Input
                type="checkbox"
                name="country1"
                onChange={this.countryChangeHandler.bind(this)}
                value={this.state.countries[0]}
              />{' '} Country 1
              <br></br>
              <Input
                type="checkbox"
                name="country2"
                onChange={this.countryChangeHandler.bind(this)}
                value={this.state.countries[1]}
              />{' '} Country 2
              <br></br>
              <Input
                type="checkbox"
                name="country3"
                onChange={this.countryChangeHandler.bind(this)}
                value={this.state.countries[2]}
              />{' '} Country 3
              <br></br>
              <Input
                type="checkbox"
                name="country4"
                onChange={this.countryChangeHandler.bind(this)}
                value={this.state.countries[3]}
              />{' '} Country 4
              <br></br>
            </Col>

            <Col className="align-self-center">
              <Label for="languages">Languages:</Label>
              <br></br>
              <Input
                type="checkbox"
                name="language1"
                onChange={this.languageChangeHandler.bind(this)}
                value={this.state.languages[0]}
              />{' '} Language 1
              <br></br>
              <Input
                type="checkbox"
                name="language2"
                onChange={this.languageChangeHandler.bind(this)}
                value={this.state.languages[1]}
              />{' '} Language 2
              <br></br>
              <Input
                type="checkbox"
                name="language3"
                onChange={this.languageChangeHandler.bind(this)}
                value={this.state.languages[2]}
              />{' '} Language 3
              <br></br>
              <Input
                type="checkbox"
                name="language4"
                onChange={this.languageChangeHandler.bind(this)}
                value={this.state.languages[3]}
              />{' '} Language 4
              <br></br>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col className="align-self-center">
              <ReactBootstrapSlider
              value={this.state.currentSliderValue}
              slideStop={this.changeSliderValue}
              step={this.state.step}
              max={this.state.max}
              min={this.state.min}
              />
            </Col>
          </Row>
        </FormGroup>
        <Button color="primary">Search</Button>
      </Form>
    );
  }
}
