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

  submitFormAPI = (payload) => {
    console.log('PAYLOAD', payload)
    fetch("http://localhost:9000/get_recommendation", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => res.json())
      .then(data => {
        const movies = data.movies
        this.setState({
          movies: movies,
          searchResultClass: "d-block",
          similarMovies: [],
          similarMovieClass: "d-none",
        })
      })
      .catch(err => err);
  }

  changeFavoriteAPI = (isfavorite, movieId, userId) => {
    const payload = {isfavorite:isfavorite, movieId: movieId, userId: userId}
    console.log('PAYLOAD', payload)
    fetch("http://localhost:9000/add_to_favorite", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => console.log(res))
      .catch(err => err);
  }

  getSimilarMovieAPI = (movieId, userId) => {
    const payload = {movieId: movieId, userId: userId}
    console.log('PAYLOAD_BEFORE_PASS', payload)
    fetch("http://localhost:9000/get_similar_movies", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => res.json())
      .then(data => {
        const movies = data.movies
        this.setState({
          similarMovies: movies,
          similarMovieClass: "d-block",
        })
      })
      .catch(err => err);
  }

  getDistinctAPI = () => {
    fetch("http://localhost:9000/get_meta")
      .then(res => res.json())
      .then(data => {
        const dct = {
          genres: ['tv', 'documentary', 'drama', 'comedy', 'mystery', 'history', 'fantasy', 'western', 'war', 'science', 'foreign', 'animation', 'music', 'adventure', 'crime', 'action', 'romance', 'fiction', 'horror', 'family', 'thriller', 'movie'],
          countries: data.countryData.filter((el) => el.length > 1).slice(0, 20), 
          languages: data.languageData.slice(0, 20)
        }
        this.setState(dct)
      })
      .catch(err => err);
  }

  componentWillMount() {

    this.getDistinctAPI()

    this.setState({
      genres: [],
      countries: [],
      languages: []
    });

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container fluid={true}>
          <Card>
            <CardHeader><h2>Search Criterion</h2></CardHeader>
            <CardBody>
              <SearchForm
                genres={this.state.genres}
                countries={this.state.countries}
                languages={this.state.languages}
                submitFormAPI={this.submitFormAPI} />
            </CardBody>
          </Card>
        </Container>

        <Container fluid={true} className={this.state.searchResultClass}>
          <Card>
            <CardHeader><h2>Search Results</h2></CardHeader>
            <CardBody>
              <Row>
                {this.state.movies.map(movie =>
                <Col sm="12" md="6" lg="4" xl="3">
                   <MovieCard
                    key={movie.movieId}
                    url={movie.url}
                    title={movie.title}
                    overview={movie.overview}
                    imdbId={movie.imdbId}
                    userId={movie.userId}
                    isfavorite={movie.isfavorite}
                    movieId={movie.movieId} //!!!! id
                    changeFavoriteHandler={this.changeFavoriteAPI}
                    getSimilarMovieHandler={this.getSimilarMovieAPI}
                  />
                </Col>
                )}
              </Row>
            </CardBody>
          </Card>
        </Container>

        <Container fluid={true} className={this.state.similarMovieClass}>
          <Card>
            <CardHeader><h2>Similar Movies</h2></CardHeader>
            <CardBody>
              <Row>
                  {this.state.similarMovies.map(movie =>
                  <Col sm="12" md="6" lg="4" xl="3">
                    <MovieCard
                      key={movie.movieId}
                      url={movie.url}
                      title={movie.title}
                      overview={movie.overview}
                      imdbId={movie.imdbId}
                      userId={movie.userId}
                      isfavorite={movie.isfavorite}
                      movieId={movie.movieId} //!!!! id
                    />
                  </Col>
                  )}
                </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}

export default App;