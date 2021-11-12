import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import PaymentSystem from '../Pay/PaymentSystem';
import Review from '../Review/Review';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();

    return (
        <div>
            {/* <PaymentSystem></PaymentSystem>
            <MyOrders></MyOrders>
            <Review></Review> */}

            <h1>DashBoard</h1>


            <Navbar bg="secondary" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">DashBoard</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link to="/products">Products</Link>
                                {/* <Link to={`${url}`}>DashBoard</Link> */}
                                <Link to={`${url}/paymentsystem`}>Payment Method</Link>
                                <Link to={`${url}/myorders`}>My Orders</Link>
                                <Link to={`${url}/review`}>Review</Link>
                                {
                                    admin && <>
                                    
                                    <Link to={`${url}/manageAllOrders`}>Manage All Orders</Link>
                                    <Link to={`${url}/addProducts`}>Add Products</Link>
                                    <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                                    <Link to={`${url}/manageProducts`}>Manage Products</Link>
                                    </>
                                }

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Switch>
                <Route exact path={path}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/paymentsystem`}>
                    <PaymentSystem></PaymentSystem>
                </Route>
                <Route path={`${path}/review`}>
                    <Review></Review>
                </Route>
                <AdminRoute path={`${path}/manageAllOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/addProducts`}>
                    <AddProducts></AddProducts>
                </AdminRoute>
                
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
            </Switch>

        </div>
    );
};

export default DashBoard;