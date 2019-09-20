import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';

export default class SearchForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Row>
              <Col sm="auto" className="align-self-center">
                <Label for="emaillabel">Email:</Label>
              </Col>
              <Col>
                <Input type="email" className="form-control" name="email" id="email" placeholder="placeholder@gmail.com" />
              </Col>
          </Row>

          <Row>
            <Col sm="auto" className="align-self-center">
              <Label for="searchbox">Keywords:</Label>
            </Col>
            <Col>
              <Input type="text" className="form-control" name="search" id="search" placeholder="Search keywords" />
            </Col>
          </Row>
        </FormGroup>

        <Button color="primary">Search</Button>
      </Form>
    );
  }
}