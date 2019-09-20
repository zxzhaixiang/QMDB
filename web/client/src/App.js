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
    // call lambda with payload
    // weekday/weekend, hour in UTC localtime - 6 hour
    // the output from calling lambda would be a list of movies 

    // this.setState({
    //   movies: [],
    //   searchResultClass: "d-block",
    // })

    console.log('PAYLOAD', payload)
    fetch("http://localhost:9000/get_recommendation", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => console.log('RES', res))
    .catch(err => err);
  }

  callAPI = () => {
    fetch("http://localhost:9000/get_recommendation")
      .then(res => res.text())
      .then(res => this.setState({ date: res }))
      .catch(err => err);
  }

  componentWillMount() {

    const genres = ["asdfasdf", "cool", "boring", "awful"]
    const countries = ["murica", "china", "straya", "newZealand"]
    const languages =  ["howdytalk", "mandorin", "apple", "spanish"]

    this.setState({genres: genres,
      countries: countries,
      languages: languages});

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
              <SearchForm 
                genres={this.state.genres} 
                countries={this.state.countries} 
                languages={this.state.languages}
                submitFormAPI={this.submitFormAPI}/>
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
                      isfavorite={movie.isfavorite}
                      movieId={movie.id} //!!!! id
                      changeFavoriteHandler={this.changeFavoriteHandler}
                      getSimilarMovieHandler={this.getSimilarMovieHandler}
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
                      isfavorite={movie.isfavorite}
                      movieId={movie.id} //!!!! id
                      changeFavoriteHandler={this.changeFavoriteHandler}
                      getSimilarMovieHandler={(x) => console.log('nothing to be done')}
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