import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col, Card, CardDeck, Container, CardBody, CardHeader } from 'reactstrap';

import Header from './components/Header'
import SearchForm from './components/SearchForm'
import MovieCard from './components/MovieCard'

class App extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      movies: [],
      searchResultClass: "d-none",
      similarMovies: [],
      similarMovieClass: "d-none",
    }  
  }

  callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ date: res }))
      .catch(err => err);
  }

  componentWillMount() {
    const movies = Array(20).fill({
      picUrl: "https://aws.test",
      ttl: "Movie title",
      subttl: "Movie subtitle",
      description: "Movie description",
      link: "link",
    })
    this.setState({movies: movies,
                  searchResultClass: "d-block"});

    const similarMovies = Array(10).fill({
      picUrl: "https://aws.test",
      ttl: "Movie title",
      subttl: "Movie subtitle",
      description: "Movie description",
      link: "link",
    })
    this.setState({similarMovies: similarMovies,
            similarMovieClass: "d-block"});

    // this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container fluid={true}>
          <Card>
            <CardHeader><h2>Search Criterion</h2></CardHeader>
            <CardBody>
              <SearchForm />
            </CardBody>
          </Card>
        </Container>

        <Container fluid={true} className={this.state.searchResultClass}>
          <Card>
            <CardHeader><h2>Search Results</h2></CardHeader>
            <CardBody>
              <CardDeck>
                {this.state.movies.map(movie =>
                    <MovieCard
                      picUrl={movie.picUrl}
                      ttl={movie.ttl}
                      subttl={movie.subttl}
                      description={movie.description}
                      link={movie.link}
                    />
                )}
              </CardDeck>
            </CardBody>
          </Card>
        </Container>

        <Container fluid={true} className={this.state.similarMovieClass}>
          <Card>
            <CardHeader><h2>Similar Movies</h2></CardHeader>
            <CardBody>
              <CardDeck>
                {this.state.similarMovies.map(movie =>
                    <MovieCard
                      picUrl={movie.picUrl}
                      ttl={movie.ttl}
                      subttl={movie.subttl}
                      description={movie.description}
                      link={movie.link}
                    />
                )}
              </CardDeck>
            </CardBody>
          </Card>
        </Container>

        {/* <div>
          <Button outline color="primary" onClick={this.callAPI}>Update date</Button>
          <div>
          </div>
        </div>
        <p className="App-intro">{this.state.date}</p> */}
      </div>
    )
  }
}

export default App;
