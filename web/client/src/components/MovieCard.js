import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardHeader,
} from 'reactstrap';


export default class MovieCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    changeState = (isfavorite) => {
        if (isfavorite){
            this.setState({isfavorite: true,
            colorStyle: "success",
            text:'remove from favorite'})
        }
        else {
            this.setState({isfavorite: false,
                colorStyle: "primary",
                text: "Add to Favorite"})
        }
    }

    favoriteButtonClickHandler = () => {
        if (this.props.changeFavoriteHandler !== undefined){
            console.log(this.props.changeFavoriteHandler)
            const isfavorite = !this.state.isfavorite
            this.changeState(isfavorite)
            this.props.changeFavoriteHandler(isfavorite, this.props.movieId, this.props.userId)
        }
    }

    getSimilarMoviesHandler = () => {
        if (this.props.getSimilarMovieHandler !== undefined){
            console.log(this.props.getSimilarMovieHandler)
            this.props.getSimilarMovieHandler(this.props.movieId, this.props.userId)
        }
    }

    componentWillMount() {
        this.changeState(this.props.isfavorite)
    }

    render() {
        const picUrl = this.props.url
        const ttl = this.props.title
        const description = this.props.overview
        const s = this.props.imdbId.toString()
        const link = "https://www.imdb.com/title/tt" + "0" * (7 - s.length) + s
        const imgStyle = {
            width: "100%",
            height: "auto"
        }
        const cardStyle = {
            maxWidth: "300px"
        }
        const cardTextStyle = {
            wordWrap: "break-word",
            width: "100%",
        }

        console.log(ttl + ": " + this.state.isfavorite + ", " + this.state.colorStyle)

        return (
            <Card>
                <CardHeader onClick={this.getSimilarMoviesHandler}><h5>{ttl}</h5></CardHeader>
                <CardImg style={imgStyle} src={picUrl} alt={picUrl} />
                <CardBody>
                    <CardText style={cardTextStyle}><a href={link} target="_blank">{description}</a></CardText>
                    <Button color={this.state.colorStyle} onClick={this.favoriteButtonClickHandler}>{this.state.text}</Button>
                </CardBody>
            </Card>

        );
    }
}