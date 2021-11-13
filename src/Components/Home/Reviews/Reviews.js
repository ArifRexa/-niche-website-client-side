import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import ReviewsData from './ReviewsData';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const {user} = useAuth()
    useEffect(() => {
        fetch("https://damp-taiga-56462.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => {
            const v = data.filter(p => p.email === user.email)
            setReviews(v)

        })
    },[])
    return (
        <div>
            <h1 className="fw-bold text-center my-5" >Your Experience</h1>
            <Container className="w-25">
                    <Row >

                        {
                            reviews.map(review => <ReviewsData 
                            key={review._id}
                            review={review}
                            ></ReviewsData>)


                        }

                    </Row>
                </Container>
            
        </div>
    );
};

export default Reviews;