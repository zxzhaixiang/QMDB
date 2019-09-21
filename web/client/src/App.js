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
        console.log(data)
        this.setState({
          movies: movies,
          searchResultClass: "d-block",
        })
      })
      .catch(err => err);

  }

  changeFavoriteAPI = (isfavorite, movieId) => {
    const payload = {movieId: movieId}
    console.log('PAYLOAD', payload)
    fetch("http://localhost:9000/add_to_favorite", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => console.log(res.text()))
      .catch(err => err);
  }

  getSimilarMovieAPI = (movieId) => {
    const payload = {movieId: movieId}
    console.log('PAYLOAD', payload)
    fetch("http://localhost:9000/get_similar_movies", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => res.json())
      .then(data => {
        const movies = data.movies
        console.log(data)
        this.setState({
          movies: movies,
          searchResultClass: "d-block",
        })
      })
      .catch(err => err);

  }

  getDistinctAPI = () => {
    fetch("http://localhost:9000/get_meta")
      .then(res => res.json())
      .then(data => {
        const dct = {
          genres: data.genreData,
          countries: data.countryData.filter((el) => el.length > 1).slice(0, 20), languages: data.languageData.slice(0, 20)
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

    // const movies = Array(20).fill({
    //   picUrl: "https://aws.test",
    //   ttl: "Movie title",
    //   subttl: "Movie subtitle",
    //   description: "Movie description",
    //   link: "link",
    // })
    // this.setState({
    //   movies: movies,
    //   searchResultClass: "d-block"
    // });

    // const similarMovies = Array(10).fill({
    //   picUrl: "https://aws.test",
    //   ttl: "Movie title",
    //   subttl: "Movie subtitle",
    //   description: "Movie description",
    //   imdb: "link",
    // })
    // this.setState({
    //   similarMovies: similarMovies,
    //   similarMovieClass: "d-block"
    // });
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
              <CardDeck>
                {this.state.movies.map(movie =>
                  <MovieCard
                    url={movie.url}
                    title={movie.title}
                    overview={movie.overview}
                    imdbId={movie.imdbId}
                    isfavorite={false}
                    movieId={movie.movieId} //!!!! id
                    changeFavoriteHandler={this.changeFavoriteAPI}
                    getSimilarMovieHandler={this.getSimilarMovieAPI}
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
                    url={movie.url}
                    title={movie.title}
                    overview={movie.overview}
                    imdbId={movie.imdbId}
                    isfavorite={false}
                    movieId={movie.movieId} //!!!! id
                    changeFavoriteHandler={this.changeFavoriteAPI}
                    getSimilarMovieHandler={(x) => console.log('nothing to be done')}
                  />
                )}
              </CardDeck>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}

export default App;