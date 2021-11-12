import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch("https://damp-taiga-56462.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Container>
                <h1>Make Admin</h1>
                {
                    success && <Alert variant="success">
                        Admin Make Successfully !
                    </Alert>
                }
                <Container className="w-50">
                    <Form className="mb-3" onSubmit={handleAdminSubmit}>
                        <Form.Control
                            onBlur={handleOnBlur}
                            type="email"
                            placeholder="Email"
                        />
                        <Button className="mt-3" type="submit">Make Admin</Button>
                    </Form>

                </Container>
            </Container>

        </div>
    );
};

export default MakeAdmin;