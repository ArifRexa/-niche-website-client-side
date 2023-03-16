import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';


const ManageProductsData = (props) => {
    const { _id, imgUrl, Brand, name, description, price } = props.product

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure? Do you want to cancel this product?")
        if (proceed) {
            const url = `https://kbowatchss.onrender.com/watches/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        window.alert("Deleted Successfully")
                        window.location.reload(false);


                    }
                })

        }

    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="img-size" variant="top" src={imgUrl} />
                    <Card.Body>
                        <Card.Title>Model Name: {name}</Card.Title>
                        <Card.Title>Brand Name: {Brand}</Card.Title>
                        <Card.Title>Price: $ {price}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button className="" onClick={() => handleDelete(_id)}>Delete</Button>
                    </Card.Body>
                </Card>

            </Col>

        </div>
    );
};

export default ManageProductsData;