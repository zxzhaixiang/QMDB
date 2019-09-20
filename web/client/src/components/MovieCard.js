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

    onClickHander = () => {
        const isfavorite = !this.state.isfavorite
        this.changeState(isfavorite)
        // do post request to update the database
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
                    <CardHeader><a href={link}>{ttl}</a></CardHeader>
                    <CardImg top width="100%" src={picUrl} alt={picUrl} />
                    <CardBody>
                        <CardSubtitle>{subttl}</CardSubtitle>
                        <CardText>{description}</CardText>
                        <Button color={this.state.colorStyle} onClick={this.onClickHander}>{this.state.text}</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}