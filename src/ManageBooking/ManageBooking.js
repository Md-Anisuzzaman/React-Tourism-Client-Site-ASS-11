import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ManageBooking.css';

const ManageBooking = () => {

    //Declaration of state

    const [bookingOrder, setbookingOrder] = useState([]);

    useEffect(() => {
        fetch('https://morning-brushlands-58353.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setbookingOrder(data))

    }, []);

    const handleDelete = id => {
        const url = `https://morning-brushlands-58353.herokuapp.com/services-delete/${id}`;
        fetch(url, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                fetch('https://morning-brushlands-58353.herokuapp.com/services')
                .then(res => res.json())
                .then(data => setbookingOrder(data))
                console.log(data);
            });
    }

    return (
        <div>
            <h1 className="mt-3 mb-5">All Booking Orders</h1>
            <Table className="m-body" striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Tour</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    bookingOrder.map(order => (
                        <tbody key={order._id}>
                            <tr>
                                <td style={{ 'color': 'black' }}>{order._id}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.tour}</td>
                                <td>{order.price}</td>
                                <button onClick={() => handleDelete(order._id)} className="btn btn-danger text-dark">Delete</button>
                            </tr>
                        </tbody>
                    ))};
            </Table>

        </div>
    );
};

export default ManageBooking;