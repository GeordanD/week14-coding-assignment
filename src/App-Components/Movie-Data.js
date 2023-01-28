import React from "react";
import Card from "react-bootstrap/Card"
import ReviewModal from "./Review-Form";



export default class MovieData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.movie.id,
            movieTitle: props.movie.movieTitle,
            img: props.movie.img,
            releaseYear: props.movie.releaseYear,
            bio: props.movie.bio
            
    }};
    render(){
    return (
     
        <Card style={{ width: "320px", margin: "2rem 1rem" }}>
            <div className="cardBox">
                <Card.Img variant="top" className="cardImg" src={this.state.img} width="200" alt={this.state.movieTitle} />
                <Card.Text className="cardText">{this.state.bio}</Card.Text>
                
            </div>
           
            <Card.Body>
                
                <Card.Title className="card-title">{this.state.movieTitle} || {this.state.releaseYear}</Card.Title>
              
            </Card.Body>
            < ReviewModal key={this.props.movie.id} movieTitle={this.props.movie.movieTitle} />
            <br></br>
            
        </Card>
     
    );
    }
}