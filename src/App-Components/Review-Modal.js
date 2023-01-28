import React, { useState, useRef } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ReactStars from "./Star-Rateing";
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";







export default function ReviewModal(props) {
    const [show, setShow] = useState(false);
    const [reviewList, setReviewList] = useState([
      {
            id: 1,
            name: 'Geordan',
            info: 'This movie was a highlight of my childhood I spent all my time as a kid watching these movies and really enjoyed them as a child.',
            star: '5★',
        },
      {
            id: 2,
            name: 'Courtney',
            info: 'This movie was a wonder',
            star: '1★',
        }
    ]);



  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const name = useRef(null);
    const info = useRef(null);
    let starRating = [];

    const changedStarRating = (newStarRating) => {
        let newRating = `${newStarRating}★`;
        starRating.push(newRating)
    }

  //TODO This function gives my button the submit the review into the review list.
    function saveNewReviewButton() {
        setReviewList(current => [...current, {
            name: name.current.value,
            info: info.current.value,
            star: starRating[starRating.length-1]
        }]);
        console.log(`Saved`);
        name.current.value = '';
        info.current.value = '';
        starRating = [];
    }

  //TODO This function builds all the reviews that are going to be displayed
  function AllReviews() {
        const itemList = reviewList.map((review) => (
          <>
            <hr></hr>
            <ListGroup variant="flush">
              <ListGroupItem  variant="success">{review.name}</ListGroupItem>
              <ListGroupItem  variant="info">{review.info}</ListGroupItem>
              <ListGroupItem variant="warning"> {review.star}</ListGroupItem>
           </ListGroup>
          </>
        ));

        return (
          <div>
            {itemList}
          </div>
        );
    }










//TODO This is my entire Modal to enter a review
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Movie Reviews
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review Form for {props.movieTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="reviewForm">
            <Form.Group className="mb-3">
              <Form.Control ref={name} type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your review here"
                ref={info}
              />

              <ReactStars count={5} size={28} onChange={changedStarRating} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveNewReviewButton}>
            Submit Review
          </Button>
        </Modal.Footer>
        <h3 className="text-center">
          <b><strong>Reviews</strong></b>
        </h3>
        <div>
          <AllReviews key={reviewList.id} />
        </div>
      </Modal>
    </>
  );
}
