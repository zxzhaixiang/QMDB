import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genreSel: [],
      countrySel: [],
      languageSel: [],
      minYear: 1500,
      maxYear: 2050,
      email: "",
      keywords: "",
    };
  }


  maxYearChangeHandler = event => {
    this.setState({ maxYear: event.target.value })
  }

  minYearChangeHandler = event => {
    this.setState({ minYear: event.target.value })
  }

  keywordsChangeHandler = event => {
    this.setState({ keywords: event.target.value })
  }

  emailChangeHandler = event => {
    this.setState({ email: event.target.value })
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

  submitForm = () => {
    const payload = this.state
    this.props.submitFormAPI(payload)
  }

  render() {
    return (
      <div>
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
                  onChange={this.emailChangeHandler}
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
                  onChange={this.keywordsChangeHandler}
                  name="search"
                  id="search"
                  placeholder="Search keywords"
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col sm="auto" className="align-self-center">
                <Label for="minYear">Year From:</Label>
              </Col>
              <Col>
                <Input
                  type="number"
                  className="form-control"
                  name="minYear"
                  id="minYear"
                  placeholder="1954"
                  onChange={this.minYearChangeHandler}
                />
              </Col>
            </Row>

            <Row>
              <Col sm="auto" className="align-self-center">
                <Label for="minYear">Year To:</Label>
              </Col>
              <Col>
                <Input
                  type="number"
                  className="form-control"
                  name="maxYear"
                  id="maxYear"
                  placeholder="2020"
                  onChange={this.maxYearChangeHandler}
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup check>
            <Row>
              <Col>
                <h5 className="text-left">Genres:</h5>
                {this.props.genres.map(genre =>
                  <div className="text-left">
                    <Input
                      type="checkbox"
                      key={genre}
                      name={genre}
                      onChange={this.genreChangeHandler.bind(this)}
                      value={genre}
                    />{"" + genre}
                  </div>
                )
                }
              </Col>

              <Col>
                <h5 className="text-left">Countries:</h5>
                {this.props.countries.map(country =>
                  <div className="text-left">
                    <Input
                      type="checkbox"
                      key={country}
                      name={country}
                      onChange={this.countryChangeHandler.bind(this)}
                      value={country}
                    />  {"" + country}
                  </div>
                )
                }
              </Col>

              <Col>
                <h5 className="text-left">Languages:</h5>
                {this.props.languages.map(language =>
                  <div className="text-left">
                    <Input
                      type="checkbox"
                      key={language}
                      name={language}
                      onChange={this.languageChangeHandler.bind(this)}
                      value={language}
                    />  {"" + language}
                  </div>
                )
                }
              </Col>
            </Row>
          </FormGroup>
          <br></br>
          <Button color="primary" onClick={this.submitForm}>Search</Button>
        </Form>
      </div>

    );
  }
}
