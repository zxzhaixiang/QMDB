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
        const isfavorite = !this.state.isfavorite
        this.changeState(isfavorite)
        this.props.changeFavoriteHandler(isfavorite, this.props.movieId)
    }

    getSimilarMoviesHandler = () => {
        this.props.getSimilarMovieHandler(this.props.movieId)
    }

    componentWillMount() {
        this.changeState(this.props.isfavorite)
    }

    render() {
        const picUrl = this.props.picUrl
        const ttl = this.props.ttl
        const subttl = this.props.subttl
        const description = this.props.description
        const link = this.props.link
        return (
            <div>
                <Card>
                    <CardHeader onClick={this.getSimilarMoviesHandler}><a href={link}>{ttl}</a></CardHeader>
                    <CardImg top width="100%" src={picUrl} alt={picUrl} />
                    <CardBody>
                        <CardSubtitle>{subttl}</CardSubtitle>
                        <CardText>{description}</CardText>
                        <Button color={this.state.colorStyle} onClick={this.favoriteButtonClickHandler}>{this.state.text}</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}