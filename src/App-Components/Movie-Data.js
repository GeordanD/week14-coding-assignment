import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"



export default function MovieData(props) {
    return (
      
        <Card style={{ width: "320px", margin: "2rem 1rem" }}>
            <div className="cardBox">
                <Card.Img variant="top" src={props.movie.img} width="200" alt={props.movie.movieTitle} />
                <Card.Text className="cardText">{props.movie.bio}</Card.Text>
            </div>
          <Card.Body>
            <Card.Title>{props.movie.movieTitle} <br></br>{props.movie.releaseYear}</Card.Title>
            
            <Button variant="primary">Leave A Review</Button>
            </Card.Body>
            <br></br>
        </Card>
     
    );
    }
