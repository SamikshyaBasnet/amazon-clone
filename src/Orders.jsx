import React, { useState, useEffect } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css';
import { useStateValue } from './StateProvider';

const Orders = () => {
    const [{ user, basekt }, dispatch] = useStateValue();

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        if (user) {
            db.collection('users')
                .doc(user.uid)
                .collection('orders')
                .orderBy('created', 'desc') //order in desc by created date
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                })
        } else {
            setOrders([]);
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders